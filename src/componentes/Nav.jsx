import icono from "../img/icono.png";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


export function Form({ toggleForm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    toggleForm();
  };
  return (
    <form className="formulario" onSubmit={handleSubmit}>
  <div className="container">
    <div className="input-group">
      <label htmlFor="firstName">Nombre:</label>
      <input type="text" id="firstName" name="firstName" />
    </div>
    <div className="input-group">
      <label htmlFor="lastName">Apellido:</label>
      <input type="text" id="lastName" name="lastName" />
    </div>
    <div className="input-group">
      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" />
    </div>
    <div className="input-group">
      <input type="checkbox" id="likeFavorite" name="likeFavorite" />
      <label htmlFor="likeFavorite">Activar mi favorito</label>
    </div>
    <div className="input-group">
      <input type="submit" value="SAVE" />
    </div>
  </div>
</form>
  );
}

export function Nav({ toggleForm }) {
  console.log(toggleForm);
  return (
    <div>
      <nav>
        <div className="nav-logo">
          <img className="nav-imgIcono" src={icono} alt="icono" />
        </div>
        <ul className="nav-botonesNavbar">
          <li>
            <Link to={""} className="nav-btnOverview">
              OverView
            </Link>
          </li>
          <li>
            <Link to={"Contacts"} className="nav-btnContacts">
              Contacts
            </Link>
          </li>
          <li>
            <Link to={"Favorites"} className="nav-btnFavorite">
              Favorites
            </Link>
          </li>
          <li>
            <button
              className="nav-btnNew"
              onClick={() => {
                toggleForm();
              }}
            >
              {" "}
              + NEW
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
}
