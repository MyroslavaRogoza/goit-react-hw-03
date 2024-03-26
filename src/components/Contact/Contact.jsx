import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <li className={css.contactItem}>
      <h2>{contact.name}</h2>
      <p>{contact.number}</p>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
