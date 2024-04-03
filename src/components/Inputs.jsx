import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function Inputs({ inpuType, value, onChange, name, label }) {


  return (
    <div className="card flex justify-content-center">
      <FloatLabel>
        <InputText
          id="username"
          value={value}
          onChange={onChange}
          className="py-3 border px-2"
          type={inpuType}
          name={name}
          required

        />
        <label htmlFor={label}>{label}</label>
      </FloatLabel>
    </div>
  );
}
