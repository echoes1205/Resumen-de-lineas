//useState sirve para que los datos de una variable se actualicen inmediatamente
import './Bloque1.css'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import Table from 'react-bootstrap/Table'
import { IconButton } from '@mui/material'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8081/bloque1')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  // Renderiza la tabla
  return (
    <div className='tabla-lineas'>
      <h1 className='title'>Reporte de Bloque 1</h1>
      {/* <EditIcon className='editbutton'></EditIcon> */}

      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Linea</th>
            <th>Ordenes</th>
            <th>Horas</th>
            <th>Defectos</th>
            <th>Cumpliendo OPF</th>
            <th className='editfield'>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.linea}</td>
              <td>{d.ordenes}</td>
              <td>{d.horas}</td>
              <td>{d.defectos}</td>
              <td>{d.opf} </td>
              <td>
                <IconButton className='editbutton' aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </td>
            </tr>
          ))}
          
        </tbody>
      </Table>
    </div>
  )
}

export default App
