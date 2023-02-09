import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const addFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  const addFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ReadOnlyRow contact={contact} />
          ))}
        </tbody>
      </table>

      <h2>Add a Contact</h2>
      <form onSubmit={addFormSubmit}>
        <input
          type="text"
          name="fullName"
          required
          placeholder="Enter a name..."
          onChange={addFormChange}
        />

        <input
          type="text"
          name="address"
          required
          placeholder="Enter an address..."
          onChange={addFormChange}
        />

        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Enter a phone number..."
          onChange={addFormChange}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Enter an email..."
          onChange={addFormChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
