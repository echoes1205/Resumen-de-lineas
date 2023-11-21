import express from "express"
import cors from 'cors'
// import db from './../backend/server.js';
import blogRoutes from './routes/routes.js';

const app = express()

app.use( cors() )
app.use(express.json())
app.use('blogs', blogRoutes)

try {
    await db.authenticate()
    console.log("Conexion exitosa a db")
} catch (error) {
    console.log(`Error de conexion a db: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Hola mundo')
})


app.listen(8081, ()=> {
    console.log("Servidor corriendo en http://localhost:8081/");
})


// app.get('/', (re, res)=> {
//     return res.json("From backend side");
// })

// app.get('/bloque1', (req, res)=> {
//     const sql = "SELECT * FROM bloque1";
//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.get('/bloque1/:id', (req, res)=> {
//     const sql = "SELECT id FROM bloque1;";
//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     })
// })


// app.put('/bloque1/:id', (req, res) => {
//     const { ordenes, horas, defectos, opf } = req.body; // Extract updated values from the request body
//     const id = parseInt(req.params.id); // Extract the record ID from the URL parameter
  
//     // Construct the SQL query based on the updated values
//     const sql = `UPDATE bloque1 SET ordenes = ?, horas = ?, defectos = ?, opf = ? WHERE id = ?`;
  
//     // Execute the SQL query using the database connection
//     db.query(sql, [ordenes, horas, defectos, opf, id], (err, data) => {
//       if (err) {
//         return res.status(500).json({
//           success: false,
//           error: err.message, // Return the error message
//         });
//       }
  
//       // Check if any rows were affected by the update
//       if (data.affectedRows > 0) {
//         return res.status(200).json({
//           success: true,
//           data: {
//             ordenes,
//             horas,
//             defectos,
//             opf,
//           }, // Return the updated record data
//         });
//       } else {
//         return res.status(404).json({
//           success: false,
//           error: 'Record not found',
//         });
//       }
//     });
//   });
  


