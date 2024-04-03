import React, { useState } from "react";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="grid grid-cols-6">
      <div>
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
