import React, { useState } from "react";
import ContactSearch from "./components/Search";
import ContactTable from "./components/ContactTable";
import ContactDetails from "./components/ContactDetails";
import contactsData from "./data/contacts.json";

const App = () => {
  const [filteredContacts, setFilteredContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (filters) => {
    const filtered = contactsData.filter((contact) =>
      Object.keys(filters).every((key) =>
        filters[key] ? contact[key]?.toString().toLowerCase().includes(filters[key].toLowerCase()) : true
      )
    );
    setFilteredContacts(filtered);
  };

  return (
    <div>
      <ContactSearch onSearch={handleSearch} />
      <ContactTable contacts={filteredContacts} onSelect={setSelectedContact} />
      <ContactDetails contact={selectedContact} />
    </div>
  );
};

export default App;
