
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Bloque1 from "./components/Bloque1";
import Bloque2 from "./components/Bloque2";
import Flow from "./components/Flow";
import Kutter from "./components/Kutter";
import Home from "./components/Home";
import Login from "./components/Login";
import './App.css'

import * as React from 'react';
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
import { useEffect } from 'react';

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

function App() {
  const [data, setData] = React.useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/bloque1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }, [])
  
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="primerbloque" element={<Bloque1 />}/>
            <Route path="segundobloque" element={<Bloque2 />}/>
            <Route path="home" element={<Home />}/>
            <Route path="flow" element={<Flow />}/>
            <Route path="Kutter" element={<Kutter />} />
            <Route path="login" element={<Login />} />
          </Route>
      </Routes>

    </div>
  );
  }

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
