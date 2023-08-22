import React, { useState } from "react";

function App() {
  const [contactData, setContactData] = useState([]);
  const handleContactPickup = async () => {
    try {
      const contacts = await navigator.contacts.select(["name", "tel"], {
        multiple: true,
      });
      console.log("contact", contacts);
      setContactData(contactData);
    } catch (err) {
      console.log(err);
    }
  };
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
