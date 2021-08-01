/* import React from "react";  */ // ako hocemo da koristimo klasu
import Header from "./components/Header.js";
import Contacts from "./components/Contacts";
import { useState, useEffect } from "react";
import AddContact from "./components/AddContact";

function App() {
  const [showAddContact, setShowAddContact] = useState(true);

  const [contacts, setContacts] = useState([]); // default je useState

  // Hooks - setContact je funkcija koja updatuje state

  function getData() {
    const data = localStorage.getItem("contacts");
    return data ? JSON.parse(data) : [];
  }

  useEffect(() => {
    const newContacts = getData();
    setContacts(newContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  // Add contact
  const addContact = (contact) => {
    // console.log(contact);
    const id = Math.floor(Math.random() * 1000) + 1;
    // console.log(id);
    const newContact = { id, ...contact };
    setContacts([...contacts, newContact]);
  };

  //Delete contact
  const deleteContact = (id) => {
    // console.log("delete", id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setContacts(
      contacts.map(
        (contact) =>
          contact.id === id
            ? { ...contact, reminder: !contact.reminder }
            : contact // ako je reminder true postavice false i obrnuto
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddContact(!showAddContact)}
        showAdd={showAddContact}
      />
      {showAddContact && <AddContact onAdd={addContact}></AddContact>}
      {contacts.length > 0 ? (
        <Contacts
          contacts={contacts}
          onDelete={deleteContact}
          onToggle={toggleReminder}
        />
      ) : (
        "Imenik je prazan..."
      )}
    </div>
  );
}

/* class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>;
  }
} */
export default App;
