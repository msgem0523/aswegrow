import React, { useRef } from "react";
import QRCode from "react-qr-code";

const QRCodeDisplay = ({ url }) => {
  const qrRef = useRef();

  const handleDownload = () => {
    const svg = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.download = "as-we-grow-qr-code.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📲 Scan to Register</h3>
      <div ref={qrRef} style={styles.qrWrapper}>
        <QRCode value={url} size={200} bgColor="#173430" fgColor="#ffce59" />
      </div>
      <button onClick={handleDownload} style={styles.button}>
        Download QR Code
      </button>
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
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#ffce59",
    color: "#173430",
    fontWeight: "bold",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
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
