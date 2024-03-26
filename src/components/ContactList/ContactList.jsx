import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ contacts }) => {
  return (
    <ul className={css.ContactList}>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
