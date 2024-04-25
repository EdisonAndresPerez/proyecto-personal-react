import "../App.css";
import { Header2 } from "./Header2";
import { useSelector } from "react-redux";
import { Favorites } from "./Favorites";
import { Contacts } from "./Contacts";


export function Overview() {
  const contacts = useSelector((state) => (state.contacts.contacts));


  return (
    <div>
      <Favorites/>
      <Contacts/>
    </div>
  );
}
