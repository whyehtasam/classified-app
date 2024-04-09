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
import PremiumCategoryTable from "./components/PremiumCategory";
import { Button } from 'primereact/button';

function App() {
  const [isShow,setIsShow] = useState(false);

  const closeSidebar = (close) => {
    setIsShow(close);
  }

  return (
    <Router>
      <div className=" p-2 bg-slate-200 ">
      <Button icon="pi pi-bars" className="mr-2" onClick={()=> setIsShow(!isShow)}/>
      </div>
      
      <div className="grid grid-cols-6 relative">
        <div className={`sm:block z-20 ${isShow ? 'block' : 'hidden'} sm:visible absolute sm:relative`}>
          <Sidebar closeSidebar={closeSidebar}/>
        </div>

        <div className="sm:col-span-5 col-span-full ">
          <div className=" w-full  sm:py-8 lg:px-14 p-5">
            <Routes>
              <Route path="/" element={<Category />} />
              <Route path="/subCategory" element={<SubCategory/>} />
              <Route path="/manageAds" element={<ManageAds/>} />
              <Route path="/manageUsers" element={<ManageUsers/>} />
              <Route path="/managePremiumUsers" element={<PremiumUserTable/>} />
              <Route path="/createSubAdmin" element={<CreateSubAdmin/>} />
              <Route path="/premiumCategory" element={<PremiumCategoryTable/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;