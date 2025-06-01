import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import QRCodeDisplay from "./components/QRCodeDisplay";
// import logo from "./assets/aswegrow_logo.jpg";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt="As We Grow logo" style={styles.logo} /> */}
      <RegistrationForm />
      <QRCodeDisplay url="https://aswegrow.vercel.app" />
    </div>
  );
}

const styles = {
  logo: {
    width: "250px",
    display: "block",
    margin: " 2rem auto",
  },
};

export default App;