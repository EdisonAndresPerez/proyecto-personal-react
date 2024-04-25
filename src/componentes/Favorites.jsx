import "../App.css";
import { Header } from "./Header";
import { useSelector } from "react-redux";
import { Cards } from "./Card";



export function Favorites() {
  const { contacts } = useSelector((state) => state.contacts);
  const favorites = contacts.filter(contact => contact.isFavorite && !contact.isDeleted)
  return (
    <div>
      <Header />
      <div className="cardListContainer">
      {favorites.filter(contact => contact.isFavorite).map((contact, i) => {
          return <Cards  key={i}  user={contact} />;
      })}
      </div>
    </div>
  );
}
