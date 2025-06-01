// src/components/QRCodeDisplay.jsx
import React from "react";
import QRCode from "react-qr-code";

const QRCodeDisplay = ({ url }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📲 Scan to Register</h3>
      <div style={styles.qrWrapper}>
        <QRCode value={url} size={200} bgColor="#173430" fgColor="#ffce59" />
      </div>
      <p style={styles.url}>{url}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "3rem",
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: "#0f1f1d",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "#ffce59",
    fontFamily: "Segoe UI, sans-serif",
    marginBottom: "1rem",
  },
  qrWrapper: {
    padding: "1rem",
    backgroundColor: "#173430",
    borderRadius: "1rem",
    display: "inline-block",
  },
  url: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#e6ffe3",
    wordBreak: "break-all",
    fontFamily: "monospace",
  },
};

export default QRCodeDisplay;
