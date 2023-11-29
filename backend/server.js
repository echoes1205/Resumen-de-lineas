const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());

//conexion a db
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "resumen-lineas"
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const values = [username, password];

  db.query(
    "SELECT * FROM login WHERE username = ? AND password = ?",
    values,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          res.status(200).send({
            "id": result[0].id,
            "user": result[0].user,
            "username": result[0].username
          });
        } else {
          res.status(400).send("Usuario no encontrado");
        }
      }
    }
  );
});

//metodos get
app.get('/', (re, res)=> {
    return res.json("From backend side");
})



app.get('/bloque1', (req, res)=> {
    const sql = "SELECT * FROM bloque1";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get('/bloque2', (req, res)=> {
  const sql = "SELECT * FROM bloque2 ";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  })
})

app.get('/flow', (req, res)=> {
  const sql = "SELECT * FROM flow";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  })
})

app.get('/kutter', (req, res)=> {
  const sql = "SELECT * FROM kutter";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  })
})

//metodos put (update)
app.put("/bloque1/:id", (req, res) => {
    const { id } = req.params;
    const { ordenes, horas, defectos, fecha } = req.body;
    const sql = `UPDATE bloque1 SET ordenes = ?, horas = ?, defectos = ?, fecha = ? WHERE id = ?`;
    db.query(sql, [ordenes, horas, defectos, fecha, id], (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send(result);
      }
    });
  });

  app.put("/bloque2/:id", (req, res) => {
    const { id } = req.params;
    const { ordenes, horas, defectos, fecha } = req.body;
    const sql = `UPDATE bloque2 SET ordenes = ?, horas = ?, defectos = ?, fecha = ? WHERE id = ?`;
    db.query(sql, [ordenes, horas, defectos, fecha, id], (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send(result);
      }
    });
  });

  app.put("/flow/:id", (req, res) => {
    const { id } = req.params;
    const { ordenes, horas, defectos, fecha } = req.body;
    const sql = `UPDATE flow SET ordenes = ?, horas = ?, defectos = ?, fecha = ? WHERE id = ?`;
    db.query(sql, [ordenes, horas, defectos, fecha, id], (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send(result);
      }
    });
  });

  app.put("/kutter/:id", (req, res) => {
    const { id } = req.params;
    const { ordenes, horas, defectos, fecha } = req.body;
    const sql = `UPDATE kutter SET ordenes = ?, horas = ?, defectos = ?, fecha = ? WHERE id = ?`;
    db.query(sql, [ordenes, horas, defectos, fecha, id], (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send(result);
      }
    });
  });


app.listen(8081, ()=> {
    console.log("Servidor corriendo en http://localhost:8081/");
})