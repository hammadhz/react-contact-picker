import React, { useState } from "react";

function App() {
  const [contactData, setContactData] = useState(null);
  const handleContactPickup = async () => {
    try {
      const contactsValues = await navigator.contacts.select(["name", "tel"]);
      console.log("contact", contactsValues);
      alert(contactsValues);
      setContactData(contactsValues);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(contactData);
  return (
    <React.Fragment>
      <button onClick={handleContactPickup}>pickup contact</button>
      {JSON.stringify(contactData)}
    </React.Fragment>
  );
}

export default App;
