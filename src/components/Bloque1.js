import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bloque1.css';
import EditIcon from '@mui/icons-material/Edit';
import Table from 'react-bootstrap/Table';
import { IconButton } from '@mui/material';
import { Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [registro, setRegistro] = useState(null);
  const [form, setForm] = useState({
    linea: '',
    ordenes: '',
    horas: '',
    defectos: '',
    opf: '',
  });

  const [modalEditar, setModalEditar] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8081/bloque1')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };


  const ocultarModalEditar = () => {
    setModalEditar(false);
  };



  const actualizarRegistro = () => {
    // Update the record in the database using the updated record data
    const updatedRecord = {
      linea: form.linea,
      ordenes: form.ordenes,
      horas: form.horas,
      defectos: form.defectos,
      opf: form.opf,
    };
    update(registro.id, updatedRecord);
  };



  const handleInsert = (nuevoRegistro) => {
    setData([...data, nuevoRegistro]);
    ocultarModalEditar();
  };

  const insertar = () => {
    const nuevoRegistro = {
      linea: form.linea,
      ordenes: form.ordenes,
      horas: form.horas,
      defectos: form.defectos,
      opf: form.opf,
    };

    handleInsert(nuevoRegistro);
  };




  async function update(id, datos) {
    try {
      const response = await axios.put(`http://localhost:8081/bloque1/${id}`, {
        ordenes: datos.ordenes,
        horas: datos.horas,
        defectos: datos.defectos,
        opf: datos.opf,
      });

      if (response.status === 200) {
        // The record was updated successfully
        console.log('Record updated successfully');
      } else {
        // An error occurred during the update
        console.error('Error updating record:', response.status);
      }
    } catch (error) {
      console.error('Error updating record:', error);
    }
  }






  // This code is responsible for showing the modal
  function mostrarModalEditar(registro) {
    // Set the form values to the values of the selected record
    setForm({
      linea: registro.linea,
      ordenes: registro.ordenes,
      horas: registro.horas,
      defectos: registro.defectos,
      opf: registro.opf,
    });

    // Open the modal
    setModalEditar(true);
  }



  const datos = {
    ordenes: "nuevas ordenes",
    horas: "nuevas horas",
    defectos: "nuevos defectos",
    opf: "nueva opf",
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
          {data.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.linea}</td>
              <td>{registro.ordenes}</td>
              <td>{registro.horas}</td>
              <td>{registro.defectos}</td>
              <td>{registro.opf}</td>
              <td>
                <IconButton
                  aria-label="editar"
                  onClick={() => mostrarModalEditar(registro)}
                >
                  <EditIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Linea:</label>
            <input
              className="form-control"
              name="linea"
              type="reset"
              onChange={handleChange}
              value={form.linea}
            />
          </FormGroup>

          <FormGroup>
            <label>Ordenes:</label>
            <input
              className="form-control"
              name="ordenes"
              type="text"
              onChange={handleChange}
              value={form.ordenes}
            />
          </FormGroup>
          <FormGroup>
            <label>Horas:</label>
            <input
              className="form-control"
              name="horas"
              type="text"
              onChange={handleChange}
              value={form.horas}
            />
          </FormGroup>
          <FormGroup>
            <label>Defectos:</label>
            <input
              className="form-control"
              name="defectos"
              type="text"
              onChange={handleChange}
              value={form.defectos}
            />
          </FormGroup>
          <FormGroup>
            <label>OPF:</label>
            <input
              className="form-control"
              name="opf"
              type="text"
              onChange={handleChange}
              value={form.opf}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
  <Button color="primary" onClick={() => update(registro, datos)}>
    Editar
  </Button>
  <Button color="primary" onClick={() => actualizarRegistro()}>
    Cancelar
  </Button>
</ModalFooter>

      </Modal>
    </div>
  );
}
export default App;