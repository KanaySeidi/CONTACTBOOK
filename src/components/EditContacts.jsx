import React, { useState } from "react";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [surname, setSurname] = useState(props.editContact.surname);
  let [phone, setPhone] = useState(props.editContact.phone);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.name = surname;
    contact.name = phone;

    props.handleSaveEditedContact(contact);
    setName("");
    setSurname("");
    setPhone("");
  }
  return (
    <div>
      <input
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Имя"
        value={name}
      />
      <input
        onChange={(event) => setSurname(event.target.value)}
        type="text"
        placeholder="Фамилия"
        value={surname}
      />
      <input
        onChange={(event) => setPhone(event.target.value)}
        type="text"
        placeholder="Номер телефона"
        value={phone}
      />
      <button onClick={handleSaveClick}>Сохранить</button>
    </div>
  );
};

export default EditContacts;
