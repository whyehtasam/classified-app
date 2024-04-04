import React from "react";

import Button from "./SideButton";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="border bg-slate-100 h-screen py-8 px-3 space-y-4 flex flex-col">
      <Link to="/">
        <Button label="Category" />
      </Link>
      <Link to="/subCategory">
        <Button label="Sub Category" />
      </Link>
    </div>
  );
};

export default Sidebar;
