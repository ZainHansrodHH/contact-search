import React, { useState } from "react";
import ContactSearch from "./components/Search";
import ContactTable from "./components/ContactTable";
import ContactDetails from "./components/ContactDetails";
import contactsData from "./data/contacts.json";
import "./App.css";

const App = () => {
  const [filteredContacts, setFilteredContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (filters) => {
    const filtered = contactsData.filter((contact) =>
      Object.keys(filters).every((key) => {
        if (key === "address") {
          return Object.keys(filters.address).every(
            (addressKey) =>
              !filters.address[addressKey] || // Skip if filter value is empty
              contact.address[addressKey]
                ?.toString()
                .toLowerCase()
                .includes(filters.address[addressKey].toLowerCase())
          );
        }
        return (
          !filters[key] || // Skip if filter value is empty
          contact[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
        );
      })
    );
    setFilteredContacts(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentContacts = filteredContacts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <ContactSearch onSearch={handleSearch} />
      <ContactTable contacts={currentContacts} onSelect={setSelectedContact} />
      <ContactDetails contact={selectedContact} />
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
