import { FaTimes } from "react-icons/fa";
const Contact = ({ contact, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${contact.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(contact.id)}
    >
      <h3>
        {contact.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(contact.id)}
        />
      </h3>
      <p>{contact.telephone}</p>
    </div>
  );
};

export default Contact;
