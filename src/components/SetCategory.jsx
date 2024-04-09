// Category.jsx
import React, { useState, useEffect } from "react";
import Input from "./Inputs";
import Tabels from "./Tables";

const SetCategory = () => {
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      id: category.length + 1,
      name: formData.name,
      createdDate: new Date().toISOString().slice(0, 10),
    };
    setCategory([...category, newCategory]);
    localStorage.setItem(
      "category",
      JSON.stringify([...category, newCategory])
    );
    setFormData({ name: "" });
  };

  useEffect(() => {
    const storedCategory = localStorage.getItem("category");
    if (storedCategory) {
      setCategory(JSON.parse(storedCategory));
    }
  }, []);

  return (
    <div className="category h-screen    space-y-6">
      <h1 className="text-2xl sm:text-4xl font-semibold ">Add Categories details :</h1>
      <form action="" onSubmit={handleSubmit} className="grid gap-6">
        <div className="input-values  grid grid-cols-4 mt-1 sm:mt-0">
          <Input
            label="Category name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <button
            className=" border px-8 py-2 rounded-md bg-green-500 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="">
        <Tabels categories={category} setCategories={setCategory} />
      </div>
    </div>
  );
};

export default SetCategory;
