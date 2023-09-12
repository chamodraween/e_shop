const connection = require("../db/db-connection")

const saveOrder = (req,res) => {
    const { id, uname, uaddress, ucity, uzip, title, price, item_id } = req.body;
  const insertSql = 'INSERT INTO orders (id, uname, uaddress, ucity, uzip, title, price, item_id) VALUES (?, ?, ?, ?, ?, ?, ? ,?)';

  connection.query(insertSql, [id, uname, uaddress, ucity, uzip, title, price, item_id], (err, result) => {
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