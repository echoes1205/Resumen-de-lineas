const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "resumen-lineas"
})

app.get('/', (re, res) => {
  return res.json("From backend side");
})



app.get('/bloque1', (req, res) => {
  const sql = "SELECT * FROM bloque1";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.get('/bloque1/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sql = `SELECT * FROM bloque1`;
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error fetching record:', err);
      return res.json(data);
  }})
})


//get de pesta;a update
app.get('/bloque1/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sql = `SELECT * FROM bloque1`;
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error fetching record:', err);
      return res.json(data);
  }})
})






//update
app.put("/bloque1/:id", (req, res) => {
  const { id } = req.params;
  const { ordenes, horas, defectos, opf } = req.body;
  const sql = `UPDATE bloque1 SET ordenes = ?, horas = ?, defectos = ?, opf = ? WHERE id = ?`;
  db.query(sql, [ordenes, horas, defectos, opf, id], (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      res.send(result);
    }
  });
});


// app.post("/bloque1/:id",(req,res)=>{
//     // const {id}=req.params;
//     const {ordenes, horas, defectos, opf}=req.body;
//     const sql='insert into bloque1 values (?,?,?,?)';
//     db.query(sql, (err,data)=>{
//         if(err)
//         res.json({err: err});
//         else
//         res.json(data);
//     })
// })

// insert
app.post('/bloque1:id', (req, res) => {
  const { ordenes, horas, defectos, opf } = req.body;

  const sql = `INSERT INTO bloque1 (ordenes, horas, defectos, opf) VALUES (?, ?, ?, ?)`;

  db.query(sql, [ordenes, horas, defectos, opf], (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      res.send(result);
    }
  });
});



app.listen(8081, () => {
  console.log("Servidor corriendo en http://localhost:8081/");
})