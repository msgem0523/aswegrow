import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Waiver from "./components/Waiver.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/waiver" element={<Waiver />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);