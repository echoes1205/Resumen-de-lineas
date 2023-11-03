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
import BasicTable from './Kutter';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Kutter from './Kutter';
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




const Bloque2 = () =>{
  return <h1>Reporte de Flow</h1>;
}

export default function Flow() {

    <Kutter>
        <p>s</p>
    </Kutter>

}

