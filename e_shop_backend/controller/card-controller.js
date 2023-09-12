const connection = require("../db/db-connection")

const saveCard = (req,res) => {
    const { title, date, img, price, description } = req.body;
  const insertSql = 'INSERT INTO card (title, date, img, price, description) VALUES (?, ?, ?, ?, ?)';

  connection.query(insertSql, [title, date, img, price, description], (err, result) => {
    if (err) {
      console.error('Error executing INSERT SQL query:', err);
      return res.status(500).json({ error: 'An error occurred while inserting data.' });
    }
    res.json(result);
  });

}

const getCard = (req,res) => {
    connection.query('SELECT * FROM card', (err, rows) => {
        if (err) {
          console.error('Error executing query:', err);
          return res.status(500).json({ error: 'Server error' });
        }
        res.json(rows);
      });
    
}

const updateCard = (req,res) => {
    const { id, title, date, img, price, description } = req.body;
  const insertSql = 'UPDATE card set title=?, date=?, img=?, price=?, description=? where id=?';

  connection.query(insertSql, [title, date, img, price, description, id], (err, result) => {
    if (err) {
      console.error('Error executing INSERT SQL query:', err);
      return res.status(500).json({ error: 'An error occurred while inserting data.' });
    }
    res.json(result);
  });
    
}

const deleteCard = (req,res) => {
    const id = req.params.id;
  const deleteSql = 'DELETE FROM card WHERE id = ?';

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


module.exports = {saveCard, getCard, deleteCard, updateCard};