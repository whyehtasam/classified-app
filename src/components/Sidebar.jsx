import React from "react";

import Button from "./SideButton";
import { Link } from "react-router-dom";
const Sidebar = ({closeSidebar}) => {
  return (
    <div className=" bg-slate-100 h-full py-8 px-3 space-y-4 flex flex-col" >
      <Link to="/" onClick={()=> closeSidebar(false)}>
        <Button label="Category" />
      </Link>
      <Link to="/subCategory" onClick={()=> closeSidebar(false)}>
        <Button label="Sub Category" />
      </Link>
      <Link to="/details" onClick={()=> closeSidebar(false)}>
        <Button label="Add Details" />
      </Link>
      <Link to="/manageAds" onClick={()=> closeSidebar(false)}>
        <Button label="View Ads" />
      </Link>
      <Link to="/manageUsers" onClick={()=> closeSidebar(false)}>
        <Button label="View Users" />
      </Link>
      <Link to="/premiumCategory" onClick={()=> closeSidebar(false)}>
        <Button label="Premium Category" />
      </Link>
      <Link to="/managePremiumUsers" onClick={()=> closeSidebar(false)}>
        <Button label="Premium Users" />
      </Link>
      <Link to="/createSubAdmin" onClick={()=> closeSidebar(false)}>
        <Button label="Create Sub admin" />
      </Link>
      
    </div>
  );
};

export default Sidebar;
