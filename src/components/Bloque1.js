//useState sirve para que los datos de una variable se actualicen inmediatamente
import Layout from './Layout';
import './Bloque1.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    //createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('101A', '25 Octubre 2023', 64.23, 2, 7),

    createData('101B', '', 9.0, 37, 4.3),
    createData('102A', 262, 16.0, 24, 6.0),
    createData('102B', 305, 3.7, 67, 4.3),
    createData('102C', 356, 16.0, 49, 3.9),
  ];

  
  export default function BasicTable() {
    
    return (

      <TableContainer component={Paper} className='table' >
        
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table' >
          <TableHead  >
              <h1>Reporte de Bloque 1</h1>
            <TableRow  >
              <TableCell>Linea</TableCell>
              <TableCell align="right">Jefe de grupo</TableCell>
              <TableCell align="right">Horas Ganadas</TableCell>
              <TableCell align="right">Numero de defectos</TableCell>
              <TableCell align="right">Cantidad de ordenes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

