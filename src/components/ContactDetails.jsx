import React from "react";

const ContactDetails = ({ contact }) => (
  <div>
    <h3>Selected Contact</h3>
    {contact ? (
      <div>
        <p>Name: {`${contact.firstName} ${contact.lastName}`}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Address: {`${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zipCode}`}</p>
      </div>
    ) : (
      <p>No contact selected</p>
    )}
  </div>
);

export default ContactDetails;
