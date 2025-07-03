import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    childShirtSize: "",
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
        waiverAccepted: false,
      });
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("Something went wrong!");
    }
  };

  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundImage: "url('/bamboo-background.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      padding: "2rem",
    },
    formContainer: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      borderRadius: "15px",
      padding: "2rem",
      width: "100%",
      maxWidth: "500px",
      // boxShadow: "0 0 15px rgba(0,0,0,0.3)",
      color: "#e6ffe3",
    },
    logoTextContainer: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    logoLine: {
      fontFamily: "Playfair Display, serif",
      fontSize: "2rem",
      margin: 0,
      color: "#e6ffe3",
    },
    aswe: {
      fontWeight: "bold",
    },
    grow: {
      fontFamily: "Great Vibes, cursive",
      fontSize: "2.5rem",
      color: "#ffce59",
      marginLeft: "0.25rem",
    },
    subtitle: {
      fontFamily: "Playfair Display, serif",
      fontSize: "1.2rem",
      color: "#e6ffe3",
      marginTop: "0.25rem",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div style={styles.logoTextContainer}>
            <h1 style={styles.logoLine}>
              <span style={styles.aswe}>As We </span>
              <span style={styles.grow}>Grow</span>
            </h1>
            <h2 style={styles.subtitle}>Garden Day Event Registration</h2>
          </div>
          <label>
            Parent First Name:
            <input
              type="text"
              name="parentFirstName"
              value={formData.parentFirstName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Parent Last Name:
            <input
              type="text"
              name="parentLastName"
              value={formData.parentLastName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Child's Name:
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Child's Age:
            <input
              type="number"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Child's Shirt Size:
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
          <br />
          <label>
            Photo Waiver:
            <input
              type="checkbox"
              name="waiverAccepted"
              checked={formData.waiverAccepted}
              onChange={handleChange}
              required
            />
          </label>
          <p>
            By registering, you agree to our{" "}
            <a href="/waiver" target="_blank" rel="noopener noreferrer">
              Photo Waiver
            </a>
            .
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
