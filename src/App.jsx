import React, { useState } from "react";

function App() {
  const [contactData, setContactData] = useState([]);
  const handleContactPickup = async () => {
    try {
      const contactsValues = await navigator.contacts.select(["name", "tel"]);
      console.log("contact", contactsValues);
      setContactData(contactsValues);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(contactData);
  return (
    <React.Fragment>
      <button onClick={handleContactPickup}>pickup contact</button>
      {contactData.map((contact, index) => (
        <div key={index}>
          {contact.name} - {contact.tel}
        </div>
      ))}
    </React.Fragment>
  );
}

export default App;
