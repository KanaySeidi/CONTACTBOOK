import React, {useState} from 'react';
import AddContact from './components/AddContact';
import ContactsList from './components/ContactsList';
import EditContacts from './components/EditContacts';


function App() {
  let [contacts, setContacts] = useState([])
  let [editContact, setEditContact] = useState({})
  let [isEdit, setIsEdit] = useState(false)

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts]
    newContactsArray.push(newContact)
    setContacts(newContactsArray)
  }

  function handleDeleteContact(id){
    let newContactsArray = contacts.filter(item => {
      return item.id !== id
    })
    setContacts(newContactsArray)
  }

  function handleEditIndex(index){
    setIsEdit(true)
    setEditContact(contacts[index])
  }

  function handleSaveEditedContact(newContact){
    let newContactsArray = contacts.map(item => {
      if(item.id === newContact.id){
        return newContact
      }
      return item
    })
    setContacts(newContactsArray)
    setIsEdit(false)
  }
  return (
    <div>
      <AddContact 
      handleNewContact={handleNewContact}
      />
      {isEdit ? <EditContacts
      editContact = {editContact}
      handleSaveEditedContact={handleSaveEditedContact}
    /> : null}
      


      <ContactsList 
      contacts={contacts}
      handleDeleteContact={handleDeleteContact}
      handleEditIndex={handleEditIndex}
      />
    </div>
  );
};

export default App;