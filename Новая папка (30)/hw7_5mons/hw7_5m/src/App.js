import React, { useState, useCallback } from 'react';
import Formiiisss from './Formiiisss';
import Listtten  from './Listtten';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = useCallback((contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  }, []);

  const deleteContact = useCallback((index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  }, []);

  const editContact = useCallback((index, updatedContact) => {
    setContacts((prevContacts) => 
      prevContacts.map((contact, i) => (i === index ? updatedContact : contact))
    );
  }, []);

  return (
    <div className="App">
      <h1>Управление контактами</h1>
      <Formiiisss addContact={addContact} />
      <Listtten 
        contacts={contacts} 
        deleteContact={deleteContact} 
        editContact={editContact} 
      />
    </div>
  );
}

export default App;
