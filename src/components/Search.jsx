import React, { useState } from "react";

const ContactSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="dob" type="date" placeholder="Date of Birth" onChange={handleChange} />
      <input name="email" placeholder="Email Address" onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ContactSearch;
