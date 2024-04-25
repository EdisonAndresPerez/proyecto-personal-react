
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faHeart,faTrash} from '@fortawesome/free-solid-svg-icons'
import '../App.css';    
import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleFavorite, removeContact } from '../redux/contactSlice';



export function Cards({user}) {
const dispatch = useDispatch();

//funcion que se ejecuta al darle click al icono del corazon.
//user (representa al usuario que quiero agregr a favo)
//dentro de la funcion se utiliza el dispatch 
  const handleFavorite = (user) => {
    dispatch(toggleFavorite(user.id));
  };

  const removeUser = (user) =>{
    console.log(user)
    dispatch(removeContact(user.id));
  };

    return (
        <div className="card-container">
          < img  
          src={user?.avatar} 
          alt="icono"
          width="100px"
          height="100px"
          className={user?.isFavorite ? 'card-img-favorite': ''}
          />

          <h2>{user?.first_name} {user?.last_name}</h2>
          <p>{user?.email}</p>
          <hr/>
          {user?.isFavorite ? (
            <button className="card-btnEliminar" onClick={() => handleFavorite(user)}>                           
              <FontAwesomeIcon icon={faTimes} /> Remove
            </button>
          ) : (
            <div className="card-iconosContainer">
              <FontAwesomeIcon icon={faHeart} className='card-iconoCorazon' onClick={() => handleFavorite(user)}/>
              {
                !user.isFavorite &&
              <FontAwesomeIcon icon={faTrash} className='card-iconoEliminar'onClick={() => removeUser(user)}/>
            }
            </div>
          )}
        </div>      
    );
}


