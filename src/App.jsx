import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Category from "./components/SetCategory";
import SubCategory from "./components/SetSubCategory";
import ManageAds from "./components/ManageAds";
import ManageUsers from "./components/ManageUsers";
import PremiumUserTable from "./components/PremiumUser";
import CreateSubAdmin from "./components/CreateSubAdmin";

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
              <Route path="/manageAds" element={<ManageAds/>} />
              <Route path="/manageUsers" element={<ManageUsers/>} />
              <Route path="/managePremiumUsers" element={<PremiumUserTable/>} />
              <Route path="/createSubAdmin" element={<CreateSubAdmin/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
