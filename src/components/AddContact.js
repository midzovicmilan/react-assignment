import { useState } from "react";

const AddContact = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [telephone, setTelephone] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a contact");

      return;
    }
    onAdd({ text, telephone, reminder });
    setText("");
    setTelephone("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Kontakt</label>
        <input
          type="text"
          placeholder="Dodaj ime i prezime"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Broj telefona</label>
        <input
          type="text"
          placeholder="Dodaj broj telefona"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Omiljeni kontakt</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>

      <input
        type="submit"
        value="Sacuvaj kontakt"
        className="btn btn-block"
      ></input>
    </form>
  );
};

export default AddContact;
