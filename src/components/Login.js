import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios'

const Login = () => {
  const [body, setBody] = useState({
    username: '',
    password: ''  
  });

  const inputChange = ({ target }) => {
    const { name, value } = target
    setBody({
      ...body, 
      [name]: value 
    })
  };

  const onSubmit=() => {
    axios.post('http://localhost:8081/login', body)
    .then(({ data }) => {
      console.log(data)
    })
    .catch(({ response }) => {
      console.log(response)
    })
  }

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
                label="Username"
                id="formControlLg"
                type="email"
                size="lg"
                value={body.username}
                onChange={inputChange}
                name='username'
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
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
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p
                className="mb-5 pb-lg-2"
                style={{ color: '#393f81' }}
              >
                Don't have an account?{' '}
                <a href="#!" style={{ color: '#393f81' }}>
                  Register here
                </a>
              </p>

              {/* <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div> */}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
