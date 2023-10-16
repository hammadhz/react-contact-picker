import React, { useState } from "react";

function App() {
  const [contactData, setContactData] = useState("");
  const handleContactPickup = async () => {
    try {
      const contactsValues = await navigator.contacts.select(["tel"]);
      console.log("contact", contactsValues);
      const telValue = contactsValues[0];
      setContactData(telValue?.tel);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(contactData);
  return (
    <React.Fragment>
      <button onClick={handleContactPickup}>pickup contact</button>
      {JSON.stringify(contactData?.[0])}
    </React.Fragment>
  );
}

export default App;
