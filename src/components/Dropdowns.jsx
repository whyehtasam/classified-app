import React from "react";
import { Dropdown } from "primereact/dropdown";

export default function Dropdowns({ label, name, value, options, onChange }) {
  return (
    <div className="card flex justify-content-center">
     
      <Dropdown
        id={name}
        value={value}
        onChange={onChange}
        options={options}
        optionLabel="name"
        placeholder={`Select a ${label}`}
        className="w-full md:w-14rem border"
      />
    </div>
  );
}
