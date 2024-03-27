import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <h2>{contact.name}</h2>
      <p>{contact.number}</p>
      <button type="button" onClick={()=>onDeleteContact(contact.id)} className={css.delBtn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
