import React from "react";
import { Link } from "react-router-dom";

const Waiver = () => {
    const styles = {
        wrapper: {
          backgroundImage: "url('/assets/bamboo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "3rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        contentBox: {
          backgroundColor: "rgba(23, 52, 48, 0.85)", // emerald overlay
          padding: "2rem",
          borderRadius: "1rem",
          maxWidth: "800px",
          color: "#fffce5",
          fontSize: "1.1rem",
          fontFamily: "Playfair Display, serif",
          lineHeight: "1.6",
          boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
        },
        title: {
          textAlign: "center",
          fontSize: "2rem",
          color: "#ffce59",
          marginBottom: "1rem",
          fontFamily: "Great Vibes, cursive",
        },
    };

    return (
        <div style={styles.wrapper}>
          <div style={styles.contentBox}>
            <h1 style={styles.title}>Photo Waiver & Consent Form</h1>
            <p>
              By participating in the As We Grow Garden Day Event, you give permission for your child's photo and/or video to be taken during events. These images may be used for promotional purposes including social media, website content, and printed materials. No personal information will be shared without additionall consent.
            </p>
            <p>
              You may opt out at any time by contacting us directly at <a href="mailto:aswegrowhairsalon@gmail.com">aswegrowhairsalon@gmail.com</a>.
            </p>
            <p>
              Thank you for helping us grow our community together!
            </p>
            <Link to="/gmsc">Back to Registration</Link>
          </div>
        </div>
    );
};

export default Waiver;