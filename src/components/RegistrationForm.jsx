import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        parentFirstName: "",
        parentLastName: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "", //update to dob and add age calculation
        datePlanted: "",
        waiverAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newvalue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
        // send to backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>🌱 As We Grow: Event Registration</h2>
            <label>Parent First Name:
                <input type="text" name="parentFirstName" onChange={handleChange} required />
            </label><br />
            <label>Parent Last Name:
                <input type="text" name="parentLastName" onChange={handleChange} required />
            </label><br />
            <label>Email:
                <input type="email" name="email" onChange={handleChange} required />
            </label><br />
            <label>Phone:
                <input type="tel" name="phone" onChange={handleChange} required />
            </label><br />
            <label>Child's Name:
                <input type="text" name="childName" onChange={handleChange} required />
            </label><br />
            <label>Child's Age:
                <input type="number" name="childAge" onChange={handleChange} required />
            </label><br />
            <label>Date Planted:
                <input type="date" name="datePlanted" onChange={handleChange} required />
            </label><br />
            <label>Photo Waiver:
                <input type="checkbox" name="waiverAccepted" onChange={handleChange} required />
            </label>
            <p>
                By registering, you agree to our <a href="/waiver" target="_blank" rel="noopener noreferre">Photo Waiver</a>.
            </p>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;