import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import baseContacts from "../../contacts.json";

export default function App() {
    
  // Creating states
  const [contact, setContact] = useState(() => {
    const gotContact = localStorage.getItem("contactValues");
    if (!gotContact) {
      return baseContacts;
    }
    return JSON.parse(gotContact);
  });
  const [filter, setFilter] = useState("");

  //   function for add and delete contact
  const addContact = (values) => {
    console.log(values);
    setContact((prevContacts) => {
      return [...prevContacts, values];
    });
  };

  const deleteContact = (deletedContactId) => {
    setContact((prevContacts) => {
      return contact.filter((el) => el.id !== deletedContactId);
    });
  };

  // saving contacts into localeStorage
  useEffect(() => {
    localStorage.setItem("contactValues", JSON.stringify(contact));
  }, [contact]);

  const visibleContacts = contact.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
