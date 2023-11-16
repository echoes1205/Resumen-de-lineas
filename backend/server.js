

const express = require('express');
const mysql = require('mysql');
const cors = require('cors')


const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"resumen-lineas"
})

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

app.listen(8081, ()=> {
    console.log("listening");
})