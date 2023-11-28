import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import Table from 'react-bootstrap/Table';
import { IconButton } from '@mui/material';
import { Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: '',
    ordenes: '',
    horas: '',
    defectos: '',
    opf: '',
  });

  const [modalEditar, setModalEditar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication(); // Verifica la autenticación al cargar el componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/flow');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  const checkAuthentication = () => {
    const isAuthenticated = localStorage.getItem('auth') === 'yes';
    setIsLoggedIn(isAuthenticated);
  };

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

  const mostrarModalEditar = (form) => {
    setForm(form);
    setModalEditar(true);
  };

  const actualizarRegistro = () => {
    update(form.id, {
      ordenes: form.ordenes,
      horas: form.horas,
      defectos: form.defectos,
      opf: form.opf,
    });

    ocultarModalEditar();

  };

  const update = async (id, datos) => {
    try {
      const response = await axios.put(`http://localhost:8081/flow/${id}`, datos);
      if (response.status === 200) {
        console.log('Record updated successfully');
        fetchData(); // Fetch updated data after successful update
      } else {
        console.error('Error updating record:', response.status);
      }
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  return (

    <div className="tabla-lineas">
      <h1 className="title">Reporte de Flow</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Linea</th>
            <th>Ordenes</th>
            <th>Horas</th>
            <th>Defectos</th>
            <th>Fecha</th>
            {isLoggedIn && (

              <th>Acciones</th>
            )}
          </tr>
        </thead>
        <tbody>

          {data.map((form) => (
            <tr key={form.id}>
              <td>{form.linea}</td>
              <td>{form.ordenes}</td>
              <td>{form.horas}</td>
              <td>{form.defectos}</td>
              <td>{form.opf}</td>
              {isLoggedIn && (
                <td>
                  <IconButton aria-label="editar" onClick={() => mostrarModalEditar(form)}>
                    <EditIcon />
                  </IconButton>
                </td>
              )}
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
            <label>Fecha:</label>
            <input
              className="form-control"
              name="fecha"
              type="date"
              onChange={handleChange}
              value={form.fecha}
            />
          </FormGroup>

     
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => actualizarRegistro()}>
            Editar
          </Button>

          <Button color="primary" onClick={() => ocultarModalEditar()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default App;