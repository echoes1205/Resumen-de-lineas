import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Bloque1 from "./components/Bloque1";
import Bloque2 from "./components/Bloque2";
import Flow from "./components/Flow";
import Kutter from "./components/Kutter";
import Home from "./components/Home";
import Login from "./components/Login";

import './App.css';



function App() {
  const [setData] = useState([]);

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
        <Route index element={<Bloque1 />} />
        <Route path="primerbloque" element={<Bloque1 />} />
        <Route path="segundobloque" element={<Bloque2 />} />
        <Route path="home" element={<Home />} />
        <Route path="flow" element={<Flow />} />
        <Route path="kutter" element={<Kutter />} />
        <Route path="login" element={<Login />} />
        </Route>
      </Routes>

      <table>
   
   
      </table>
    </div>
  );
}

export default App;
