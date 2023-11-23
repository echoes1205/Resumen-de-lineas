import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
  const { id } = useParams();

  const [values, setValues] = useState({
    ordenes: '',
    horas: '',
    defectos: '',
    opf: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8081/bloque1/` + id)
    
      .then((res) => {
        setValues({...values, ordenes: res.data.ordenes, horas: res.data.horas, defectos: res.data.defectos, opf: res.data.opf});
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/bloque1/:id` +id, values)
      .then((res) => {
        // navigate('/primerbloque');
      })
      .catch((err) => console.log(err));
  }

  const handleUpdate = (id) => {
    // Navigate to the update page with the selected record's id
    navigate(`/update/${id}`);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ordenes">Ordenes</label>
        <input type="number" name="ordenes" value={values.ordenes} onChange={e => setValues({...values, ordenes: e.target.value})}/>

        <label htmlFor="horas">Horas</label>
        <input type="number" name="horas" value={values.horas} onChange={e => setValues({...values, horas: e.target.value})}/>

        <label htmlFor="defectos">Defectos</label>
        <input type="number" name="defectos" value={values.defectos} onChange={e => setValues({...values, defectos: e.target.value})} />

        <label htmlFor="opf">Opf</label>
        <input type="text" name="opf" value={values.opf} onChange={e => setValues({...values, opf: e.target.value})} />

        <button className="btn btn-info">Update</button>
      </form>
    </div>
  );
}

export default Update;
