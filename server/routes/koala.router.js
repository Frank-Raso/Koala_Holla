const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../routes/pool');

// GET
koalaRouter.get('/', (req, res) => {
  console.log('in /koalas GET');
  const queryString = `SELECT * FROM koalas;`;
  pool.query(queryString).then((result) => {
    res.send(result.rows);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})

// POST
koalaRouter.post('/', (req, res) => {
  console.log('in /koalas POST:', req.body);
  const queryString = `INSERT INTO koalas (name, gender, age, ready_to_transfer, notes) VALUES ($1, $2, $3, $4, $5);`
  const values = [req.body.name, req.body.gender, req.body.age, req.body.ready_to_transfer, req.body.notes];
  pool.query(queryString, values).then((result) => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

// PUT
koalaRouter.put('/', (req, res) => {
  console.log('in /koalas PUT:', req.query);
  let queryString = `UPDATE koalas SET ready_to_transfer = 'Y' WHERE id=$1;`;
  let values = [req.query.id];
  pool.query(queryString, values).then((results) => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})


// DELETE
koalaRouter.delete('/', (req, res) => {
  console.log('/koalas DELETE:', req.query);
  /// - DELETE FROM inventory WHERE id=1 ->req.query.id
  let queryString = 'DELETE FROM koalas WHERE id=$1';
  let values = [req.query.id];
  pool.query(queryString, values).then((results) => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})





module.exports = koalaRouter;
