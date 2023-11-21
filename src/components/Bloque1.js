import React, { useState, useEffect } from 'react';
import './Bloque1.css';
import EditIcon from '@mui/icons-material/Edit';

import Table from 'react-bootstrap/Table';
import { IconButton } from '@mui/material';
import { Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './../backend/server.js';

function App() {
  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [form, setForm] = useState({
    id:'',
    ordenes: '',
    horas: '',
    defectos: '',
    opf: '',
  });

  useEffect(() => {
    fetch('http://localhost:8081/bloque1')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const mostrarModalEditar = (data) => {
    setForm({
      id: data.id,
      ordenes: data.ordenes,
      horas: data.horas,
      defectos: data.defectos,
      opf: data.opf,
    });
    setModalEditar(true);
  };

  const ocultarModalEditar = () => {
    setModalEditar(false);
  };

  const handleInsert = () => {
    setData([...data, form]);
    ocultarModalEditar();
  };

  const insertar = () => {
    var valorNuevo = { ...this.state.form };
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setForm({ data: lista, modalEditar: false })
  }

  // const editarButton = (dato) => {
  //   var contador = 0;
  //   var lista = this.state.data;
  //   lista.map((registro) => {
  //     if (dato.id == registro.id) {
  //       lista[contador].ordenes = dato.ordenes;
  //       lista[contador].horas = dato.horas;
  //       lista[contador].defectos = dato.defectos;
  //       lista[contador].opf = dato.opf;
  //     }
  //   });

    // const editarButton = () => {
    //   try { 
    //     const url = 'http://localhost:8081/bloque1';
    //     const updatedRecord = {
    //       id: form.id,
    //       ordenes: form.ordenes,
    //       horas: form.horas,
    //       defectos: form.defectos,
    //       opf: form.opf,
    //     }
     
  
    //   } catch (error) {
    //       console.error('Error al agregar planta:', error);
    //     }
 

    //   const updatedData = data.map((record) => {
    //     if (record.id === updatedRecord.id) {
    //       return updatedRecord;
    //     }
    //     return record;
    //   });
    
    //   setData(updatedData);
    //   ocultarModalEditar();
    // };

    // this.setState({data: lista, modalEditar: false})
    const editarButton = () => {
      const updatedRecord = {
        id: form.id,
        ordenes: form.ordenes,
        horas: form.horas,
        defectos: form.defectos,
        opf: form.opf,
      };
    
      // Make an HTTP request to update the record in the database
      fetch(`http://localhost:8081/bloque1/${updatedRecord.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRecord),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Update the component's state to reflect the updated record
            const updatedData = data.data; // Assuming the updated record is returned in the response
            setData(updatedData);
            ocultarModalEditar();
          } else {
            console.error('Error updating record:', data.error);
          }
        })
        .catch((error) => {
          console.error('Error updating record:', error);
        });
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
            <th>Cumpliendo OPF</th>
            <th className="editfield">Editar</th>
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
                <IconButton
                  className="editbutton"
                  onClick={() => mostrarModalEditar(d)}
                  aria-label="edit"
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
            <h3>Editar datos</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Ordenes: </label>
            <input
              className="form-control"
              type="number"
              value={form.ordenes}
              onChange={handleChange}
              name="ordenes"
            />
          </FormGroup>

          <FormGroup>
            <label>Horas: </label>
            <input
              className="form-control"
              type="number"
              value={form.horas}
              onChange={handleChange}
              name="horas"
            />
          </FormGroup>

          <FormGroup>
            <label>Defectos: </label>
            <input
              className="form-control"
              type="number"
              value={form.defectos}
              onChange={handleChange}
              name="defectos"
            />
          </FormGroup>

          <FormGroup>
            <label>Cumpliendo OPF: </label>
            <input
              className="form-control"
              type="text"
              value={form.opf}
              onChange={handleChange}
              name="opf"
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={editarButton}>
            Editar
          </Button>
          <Button color="danger" onClick={ocultarModalEditar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default App;