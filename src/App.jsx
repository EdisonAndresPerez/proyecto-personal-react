import "./App.css";
import { useState, useEffect } from "react";
import { Nav } from "./componentes/Nav";
import { Form } from "./componentes/Nav";
import { Outlet } from "react-router-dom";




function App() {
  /*useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
    //PROMESA
    // SI la promesa fue EXITOSA entonces uso el RESULTADO
      .then(response => {
        return response.json()
      })
      .then(resultado =>{
        console.log(resultado)
      })
    // SI la promesa fue FALLIDA entonces CAPTURO el RESULTADO 
    .catch(error => console.error('Error fetching data:', error));
  }, []);*/
  //creamos una variable de estado y una funcion para actualizar el estado
  const [showForm, setShowForm] = useState(true);
  const [user,setUser] = useState([])

  
  //declaramos una funcion  que se usa para cambiar el estado de showForm
  const toggleForm = () => {
    setShowForm((prev) => !prev); //cambiamos valor
  };


  return (
    <div>
      <Nav toggleForm={toggleForm} />
      {/* Renderizamos el componente Nav y pasamos la función toggleForm */}
      {showForm && <Form toggleForm={toggleForm} />}{" "}
      {/*Renderizamos el componente Form  solo si es true*/}
      <Outlet />
    </div>
  );
}
export default App;
