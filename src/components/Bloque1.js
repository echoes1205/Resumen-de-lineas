import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bloque1.css';
import EditIcon from '@mui/icons-material/Edit';
import Table from 'react-bootstrap/Table';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  // const [d, setRegistro] = useState(null);
  const navigate = useNavigate()
  // const [form, setForm] = useState({
  //   linea: '',
  //   ordenes: '',
  //   horas: '',
  //   defectos: '',
  //   opf: '',
  // });

  const [modalEditar, setModalEditar] = useState(false);

  useEffect(() => {
    // Fetch data from the server using Axios
    fetch('http://localhost:8081/bloque1')
        // axios.get('http://localhost:8081/bloque1')

  // .then((response) => {
  //   // Check if the response status code is successful (200)
  //   if (response.status === 200) {
  //     // Extract the data from the response
  //     const data = response.data;
  //     // Use the data to update your application's state or display it in the UI
  //     console.log(data);
  //   } else {
  //     // Handle the error
  //     console.error('Error fetching data:', response.status);
  //   }
  // })
  // .catch((error) => {
  //   // Handle network or other errors
  //   console.error('Error fetching data:', error);
  // });

      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const mostrarModalEditar = (d) => {
  //   setRegistro(d);
  //   setForm({
  //     linea: d.linea,
  //     ordenes: d.ordenes,
  //     horas: d.horas,
  //     defectos: d.defectos,
  //     opf: d.opf,
  //   });
  //   setModalEditar(true);
  // };

  // const ocultarModalEditar = () => {
  //   setModalEditar(false);
  // };


  // const actualizarRegistro = (updatedRecord) => {
  //   // Update the record in the database using the updated record data
  //   // ...
  //   ocultarModalEditar();
  // };

  // const handleInsert = (nuevoRegistro) => {
  //   setData([...data, nuevoRegistro]);
  //   ocultarModalEditar();
  // };

  // const insertar = () => {
  //   const nuevoRegistro = {
  //     linea: form.linea,
  //     ordenes: form.ordenes,
  //     horas: form.horas,
  //     defectos: form.defectos,
  //     opf: form.opf,
  //   };

  //   handleInsert(nuevoRegistro);
  // };

  // async function update() {
  //   const id = document.getElementById("id").value;
  //   const data = {
  //     ordenes: document.getElementById("ordenes").value,
  //     horas: document.getElementById("horas").value,
  //     defectos: document.getElementById("defectos").value,
  //     opf: document.getElementById("opf").value,
  //   };

  //   try {
  //     const response = await fetch(`http://localhost:8081/bloque1/${id}`, {
  //       method: "PUT",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const value = response?.status;

  //     if (value === 200) {
  //       // La solicitud se realizó correctamente
  //       alert("Registro actualizado correctamente");
  //     } else {
  //       // La solicitud no se realizó correctamente
  //       alert("Ocurrió un error al actualizar el registro");
  //     }
  //   } catch (error) {
  //     // Ocurrió un error
  //     alert(error);
  //   }
  // }

  //   async function update(id, datos) {
  //     try {
  //       const response = await fetch(`http://localhost:8081/bloque1/${id}`, {
  //         method: "PUT",
  //         body: JSON.stringify(datos),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (response.status === 200) {
  //         // La solicitud se realizó correctamente
  //         alert("Registro actualizado correctamente");
  //       } else {
  //         // La solicitud no se realizó correctamente
  //         alert("Ocurrió un error al actualizar el registro");
  //       }
  //     } catch (error) {
  //       // Ocurrió un error
  //       alert(error);
  //     }
  //   }
  //   const id = 123;
  // const datos = {
  //   ordenes: "nuevas ordenes",
  //   horas: "nuevas horas",
  //   defectos: "nuevos defectos",
  //   opf: "nueva opf",
  // };

  // update(id, datos);


  const handleDelete = (id) => {
    // Delete the record using axios
    axios.delete(`http://localhost:8081/bloque1/${id}`)
      .then(() => {
        // Update the local state after successful deletion
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (id) => {
    // Navigate to the update page with the selected record's id
    navigate(`/update/${id}`);
  };


  return (
    <div className="tabla-lineas">
      <h1 className="title">Reporte de Bloque 1</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Linea</th>
            <th>Ordenes</th>
            <th>Horas</th>
            <th>Defectos</th>
            <th>OPF</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.linea}</td>
              <td>{d.ordenes}</td>
              <td>{d.horas}</td>
              <td>{d.defectos}</td>
              <td>{d.opf}</td>
              <td>
     
                
                <Link className='text-decoration-none btn btn-sm btn-success'
                to={`/update/${d.id}`}>Update</Link>

                <Button className="btn btn-sm btn-danger" onClick={(e) => handleDelete(d.id)}>
                  Eliminar
                </Button>

                           {/* <IconButton aria-label="editar" onClick={() => handleUpdate(d.id)}>
                  <EditIcon />
                  
                </IconButton>  */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default App;