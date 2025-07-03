import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const styles = {
    nav: {
      backgroundColor: "#173430", // emerald
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      color: "#ffce59", // gold
      fontSize: "1.5rem",
      fontWeight: "bold",
      fontFamily: "Great Vibes, cursive",
      textDecoration: "none",
    },
    burger: {
      display: "none",
      flexDirection: "column",
      cursor: "pointer",
    },
    bar: {
      height: "3px",
      width: "25px",
      backgroundColor: "#e6ffe3",
      margin: "4px 0",
      transition: "0.3s",
    },
    menu: {
      display: "flex",
      gap: "1.5rem",
    },
    menuMobile: {
      flexDirection: "column",
      width: "100%",
      marginTop: "1rem",
    },
    link: {
      color: "#e6ffe3",
      textDecoration: "none",
      fontWeight: "500",
      fontFamily: "Segoe UI, sans-serif",
    },
    // Add a media query manually
    "@media screen and (max-width: 768px)": {
      burger: {
        display: "flex",
      },
      menu: {
        display: "none",
      },
    },
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>As We Grow</Link>

      {/* Hamburger Icon */}
      {isMobile && (
        <div style={styles.burger} onClick={toggleMenu}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      )}

      {/* Nav Menu */}
      <div style={{
        ...styles.menu,
        ...(isMobile ? styles.menuMobile : {}),
        display: isMobile && !isOpen ? "none" : "flex"
      }}>
        <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/hair" style={styles.link} onClick={() => setIsOpen(false)}>Hair</Link>
        <Link to="/hair-care-products" style={styles.link} onClick={() => setIsOpen(false)}>Hair Products</Link>
        <Link to="/gmsc" style={styles.link} onClick={() => setIsOpen(false)}>GMSC</Link>
        <Link to="/teas" style={styles.link} onClick={() => setIsOpen(false)}>Teas</Link>
      </div>
    </nav>
  );
};

export default NavBar;
