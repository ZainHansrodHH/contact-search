import React, { useState } from "react";

const ContactSearch = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        phone: "",
        address: {
            city: "",
            streetAddress: "",
            state: "",
            zipCode: "",
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (['city', 'streetAddress', 'state', 'zipCode'].includes(name)) {
            setFilters({
                ...filters,
                address: { ...filters.address, [name]: value },
            });
        } else {
            setFilters({ ...filters, [name]: value });
        }
    };

    const handleSearch = () => {
        onSearch(filters);
    };

    return (
        <div className="form">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" placeholder="First Name" onChange={handleChange} />

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" placeholder="Last Name" onChange={handleChange} />

            <label htmlFor="dob">Date of Birth</label>
            <input id="dob" name="dob" type="date" onChange={handleChange} />

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" placeholder="Email Address" onChange={handleChange} />

            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" placeholder="Phone Number" onChange={handleChange} />

            <label htmlFor="streetAddress">Street Address</label>
            <input id="streetAddress" name="streetAddress" placeholder="Street Address" onChange={handleChange} />

            <label htmlFor="city">City</label>
            <input id="city" name="city" placeholder="City" onChange={handleChange} />

            <label htmlFor="state">State</label>
            <input id="state" name="state" placeholder="State" onChange={handleChange} />

            <label htmlFor="zipCode">Zipcode</label>
            <input id="zipCode" name="zipCode" placeholder="Zipcode" onChange={handleChange} />

            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default ContactSearch;
