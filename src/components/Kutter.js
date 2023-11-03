import React from 'react';


import Layout from './Layout';
import './Bloque1.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

// const Kutter = () =>{
//     return <h1>Reporte de Kutter</h1>;
// }

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    //createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('101A', 72.12, 2, 6, 'Si'),

    createData('101B', 67.43, 0, 4, 'Si'),
    createData('102A', 65.67, 1, 7, 'Si'),
    createData('102B', 59.77, 2, 7, 'No'),
    createData('102C', 70.41, 0, 6, 'Si'),
  ];




const Bloque2 = () =>{
  return <h1>Reporte de Kutter</h1>;
}


export default function Kutter() {
 
  
  return (

    <TableContainer component={Paper} className='table' >
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table' >
        
        <TableHead  >
            <h1>Reporte de Kutter</h1>
          <TableRow  >
            <TableCell>Linea</TableCell>
            <TableCell align="right">Horas Ganadas</TableCell>
            <TableCell align="right">Numero de defectos</TableCell>
            <TableCell align="right">Cantidad de ordenes</TableCell>
            <TableCell align="right">Cumpliendo One Piece Flow</TableCell>
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


