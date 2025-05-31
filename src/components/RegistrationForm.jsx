import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        parentFirstName: "",
        parentLastName: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "", //update to dob and add age calculation
        childShirtSize: "",
        // datePlanted: "",
        waiverAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const querySnapshot = await getDocs(collection(db, "registrations"));
        if (querySnapshot.size >= 30) {
            alert("Sorry, the event is full. We've reached our limit.");
            return;
        }

        const age = Number(formData.childAge);

        if (age < 2 || age > 11) {
            alert("Sorry, this program is for children ages 2-11 only.");
            return;
        }

        try {
            await addDoc(collection(db, "registrations"), formData);
            alert("Registration submitted! 🌱");

            setFormData({
                parentFirstName: "",
                parentLastName: "",
                email: "",
                phone: "",
                childName: "",
                childAge: "",
                childShirtSize: "",
                // datePlanted: "",
                waiverAccepted: false,
            });
        } catch (err) {
            console.error("Error adding document: ", err);
            alert("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>🌱 As We Grow: Garden Day Event Registration</h2>
            <label>Parent First Name:
                <input 
                    type="text" 
                    name="parentFirstName" 
                    value={formData.parentFirstName}
                    onChange={handleChange} 
                    required 
                />
            </label><br />
            <label>Parent Last Name:
                <input 
                    type="text" 
                    name="parentLastName" 
                    value={formData.parentLastName}
                    onChange={handleChange} 
                    required 
                />
            </label><br />
            <label>Email:
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                />
            </label><br />
            <label>Phone:
                <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange} 
                    required 
                />
            </label><br />
            <label>Child's Name:
                <input 
                    type="text" 
                    name="childName" 
                    value={formData.childName}
                    onChange={handleChange} 
                    required 
                />
            </label><br />
            <label>Child's Age:
                <input 
                    type="number" 
                    name="childAge" 
                    value={formData.childAge}
                    onChange={handleChange} 
                    required 
                />
            </label><br />
            <label>Child's Shirt Size:
                <select 
                    name="childShirtSize" 
                    value={formData.childShirtSize}
                    onChange={handleChange} 
                    required
                >
                    <option value="">--Select Size--</option>
                    <option value="2T">2T(1/2)</option>
                    <option value="3T">3T(2/3)</option>
                    <option value="4T">4T(3/4)</option>
                    <option value="5T">5T(5/6)</option>
                    <option value="XS">XS(6/7)</option>
                    <option value="S">S(7/8)</option>
                    <option value="M">M(8/9)</option>
                    <option value="L">L(9/10)</option>
                    <option value="XL">XL(10/11)</option>
                </select>
            </label>
            {/* <label>Date Planted:
                <input 
                type="date" 
                name="datePlanted" 
                value={formData.datePlanted}
                onChange={handleChange} 
                required />
            </label><br /> */}
            <label>Photo Waiver:
                <input 
                    type="checkbox" 
                    name="waiverAccepted" 
                    checked={formData.waiverAccepted}
                    onChange={handleChange} 
                    required 
                />
            </label>
            <p>
                By registering, you agree to our <a href="/waiver" target="_blank" rel="noopener noreferre">Photo Waiver</a>.
            </p>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;