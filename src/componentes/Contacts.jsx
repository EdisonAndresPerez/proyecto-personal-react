import { useSelector } from "react-redux";
import "../App.css";
import { Header2 } from "./Header2";
import { Cards } from "./Card";

export function Contacts() {
  const { contacts } = useSelector((state) => state.contacts);
  const contactsList = contacts.filter( contact => contact.isDeleted === false)
  console.log(contactsList) //filtreme todos mis contactos, los cuales NO esten borrados

  return (
    <div>
      <Header2 />
 
        <div className="cardListContainer">
          {contactsList.map((contact, i) => {
            return <Cards  key={i}  user={contact} />;
          })}
        </div>
      </div>
  );
}
