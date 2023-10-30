import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';


function Login() {
  return (
    <MDBContainer className="my-5">

      <MDBCard  style={{ height:"760px" }}>
        <MDBRow className='g-0' style={{ display: "flex", alignContent: "flex-end", justifyContent: "space-around" }}>

        

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column' >

              <div className='d-flex flex-row mt-2' >
                
                <span className="h1 fw-bold mb-0">Acceder</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Inicie sesion para poder ingresar datos.</h5>

                <MDBInput wrapperClass='mb-4' label='Usuario' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Iniciar</MDBBtn>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

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
}
export default Login;
