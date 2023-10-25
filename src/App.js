import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Bloque1 from "./components/Bloque1";
import Bloque2 from "./components/Bloque2";
import Flow from "./components/Flow";
import Kutter from "./components/Kutter";
import Home from "./components/Home";
import './App.css'



function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="primerbloque" element={<Bloque1 />}/>
            <Route path="segundobloque" element={<Bloque2 />}/>
            <Route path="home" element={<Home />}/>
            <Route path="flow" element={<Flow />}/>
            <Route path="Kutter" element={<Kutter />} />
          </Route>
      </Routes>

    </div>
  );

}

export default App;
