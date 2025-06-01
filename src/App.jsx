import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import QRCodeDisplay from "./components/QRCodeDisplay";

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <QRCodeDisplay url="https://aswegrow.vercel.app" />
    </div>
  );
}

export default App;