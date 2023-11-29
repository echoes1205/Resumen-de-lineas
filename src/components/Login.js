import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer,MDBCard, MDBCardBody, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
 const [body, setBody] = useState({
   username: '',
   password: '',
 });

 const navigate = useNavigate();

 useEffect(() => {
   // Verificar la autenticación al cargar el componente
   const isAuthenticated = localStorage.getItem('auth') === 'yes';
   if (isAuthenticated) {
     navigate('/primerbloque');
   }
 }, [navigate]);
 const inputChange = ({ target }) => {
   const { name, value } = target;
   setBody({
     ...body,
     [name]: value,
   });
 };

 
 const onSubmit = (event) => {
   event.preventDefault();
   axios.post('http://localhost:8081/login', body)
     .then(({ data }) => {
       localStorage.setItem('auth', 'yes');
       navigate('/primerbloque');
       window.location.reload(true);
       

     })
     .catch(({ response }) => {
       console.error(response.data.error);
     });
 };
 return (
<MDBContainer className="my-5">
      <MDBCard style={{ height: '760px' }}>
        <MDBRow
          className="g-0"
          style={{ display: 'flex', alignContent: 'flex-end', justifyContent: 'space-around' }}
        >
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <span className="h1 fw-bold mb-0">Acceder</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: '1px' }}
              >
                Inicie sesión para poder ingresar datos.
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Usuario"
                id="formControlLg"
                type="email"
                size="lg"
                value={body.username}
                onChange={inputChange}
                name='username'
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Contraseña"
                id="formControlRg"
                type="password"
                size="lg"
                value={body.password}
                onChange={inputChange}
                name='password'
              />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={onSubmit}>
                Iniciar
              </MDBBtn>
         
           
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
 );
};
export default Login;