import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Category from "./components/SetCategory";
import SubCategory from "./components/SetSubCategory";
function App() {
  return (
    <Router>
      <div className="grid grid-cols-6">
        <div>
          <Sidebar />
        </div>

        <div className="col-span-5">
          <div className="border h-screen py-8 px-14">
            <Routes>
              <Route path="/" element={<Category />} />
              <Route path="/subCategory" element={<SubCategory/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
