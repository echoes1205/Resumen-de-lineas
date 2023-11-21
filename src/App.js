import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Bloque1 from "./components/Bloque1.js";
import Bloque2 from "./components/Bloque2.js";
import Flow from "./components/Flow.js";
import Kutter from "./components/Kutter.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import './App.css';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/bloque1')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="primerbloque" element={<Bloque1 />} />
          <Route path="segundobloque" element={<Bloque2 />} />
          <Route path="home" element={<Home />} />
          <Route path="flow" element={<Flow />} />
          <Route path="Kutter" element={<Kutter />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

      <table>
   
   
      </table>
    </div>
  );
}

export default App;
