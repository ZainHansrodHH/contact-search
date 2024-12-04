import React from "react";

const ContactTable = ({ contacts, onSelect }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date of Birth</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {contacts.length > 0 ? 
      
      contacts.map((contact) => (
        <tr key={contact.id} onClick={() => onSelect(contact)}>
          <td>{`${contact.firstName} ${contact.lastName}`}</td>
          <td>{contact.dob}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <td>{`${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zipCode}`}</td>
        </tr>
      )) : <p>No users found</p>
      
      }
    </tbody>
  </table>
);

export default ContactTable;
