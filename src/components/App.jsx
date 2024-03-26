import { useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import initialcContacts from "../initialContacts.json";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(initialcContacts);
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  });
  function onAddContact(formContact) {
    const finalFormContact = {
      ...formContact,
    };
    setContacts((prevContact) => [...prevContact, finalFormContact]);
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
