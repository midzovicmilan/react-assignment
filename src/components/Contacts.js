import Contact from "./Contact";

const Contacts = ({ contacts, onDelete, onToggle }) => {
  return (
    // setTasks([]) - tako menjamo stanje, ne moze sa push ili tako nesto
    <>
      {/* loopujemo kroz podatkei prikazujemo komponentu Task kojoj prosledjujemo props sa nazivom task*/}
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onToggle={onToggle}
        >
          {" "}
        </Contact> //jsx, task je prop
      ))}
    </>
  );
};

export default Contacts;
