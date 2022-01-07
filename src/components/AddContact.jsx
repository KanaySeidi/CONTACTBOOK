import React, { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");

  function handleClick() {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
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
      <button onClick={handleClick}>Добавить Контакт</button>
    </div>
  );
};

export default AddContact;
