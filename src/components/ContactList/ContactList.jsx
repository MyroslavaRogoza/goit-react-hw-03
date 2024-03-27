import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.ContactList}>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>;
      })}
    </ul>
  );
};

export default ContactList;
