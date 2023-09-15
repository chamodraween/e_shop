const connection = require("../db/db-connection")

const saveOrder = (req,res) => {
    const { id, uname, email, uaddress, ucity, uzip, title, price, item_id } = req.body;
  const insertSql = 'INSERT INTO orders (id, uname, email, uaddress, ucity, uzip, title, price, item_id) VALUES (?, ?, ?, ?, ?, ?, ? , ?, ?)';

  connection.query(insertSql, [id, uname, email, uaddress, ucity, uzip, title, price, item_id], (err, result) => {
    if (err) {
      console.error('Error executing INSERT SQL query:', err);
      return res.status(500).json({ error: 'An error occurred while inserting data.' });
    }
    res.json(result);
  });

}

const getOrders = (req,res) => {
    connection.query('SELECT * FROM orders', (err, rows) => {
        if (err) {
          console.error('Error executing query:', err);
          return res.status(500).json({ error: 'Server error' });
        }
        res.json(rows);
      });
    
}

const updateOrders = (req,res) => {
  const orderId = parseInt(req.params.id);
  const newStatus = req.body.status;

  // Check if orderId is a validation 
  if (isNaN(orderId) || orderId <= 0) {
    return res.status(400).json({ error: 'Invalid order ID' });
  }

  const updateSql = 'UPDATE orders SET status = ? WHERE id = ?';

  connection.query(updateSql, [newStatus, orderId], (err, result) => {
    if (err) {
      console.error('Error executing UPDATE SQL query:', err);
      return res.status(500).json({ error: 'An error occurred while updating the order status.' });
    }

    if (result.affectedRows === 0) {
      console.log("order with specified ID not found");
      // No rows were updated (order with specified ID not found)
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ message: 'Order status updated successfully' });
  });
    
}

const deleteOrders = (req,res) => {
    const id = req.params.id;
  const deleteSql = 'DELETE FROM orders WHERE id = ?';

  connection.query(deleteSql, [id], (err, result) => {
    if (err) {
      console.error('Error executing DELETE SQL query:', err);
      return res.status(500).json({ error: 'An error occurred while deleting data.' });
    }
    if (result.affectedRows === 1) {
      // Deletion was successful, send a success response
      res.json({ message: 'Row deleted successfully' });
    } else {
      // No rows were deleted (row with specified ID not found)
      res.status(404).json({ error: 'Row not found' });
    }
  });
    
}

module.exports = {saveOrder, getOrders, deleteOrders, updateOrders};