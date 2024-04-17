// SetSubCategory.jsx
import React, { useState, useEffect } from "react";
import Input from "./Inputs";
import Tabels from "./SubCategoryTables";
import Dropdowns from "./Dropdowns";
import { Button } from "primereact/button";
const SetSubCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    subCategories: [""],
  });
  const [categories, setCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubCategory = {
      id: subCategory.length + 1,
      category: formData.category,
      subCategories: formData.subCategories,
      createdDate: new Date().toISOString().slice(0, 10),
    };
    setSubCategory([...subCategory, newSubCategory]);
    localStorage.setItem(
      "subCategory",
      JSON.stringify([...subCategory, newSubCategory])
    );
    setFormData({ category: "", subCategories: [""] });
    console.log(newSubCategory);
  };

  const handleAddMore = () => {
    setFormData({
      ...formData,
      subCategories: [...formData.subCategories, ""],
    });
  };

  const handleDelete = (index) => {
    const newSubCategories = [...formData.subCategories];
    newSubCategories.splice(index, 1);
    setFormData({ ...formData, subCategories: newSubCategories });
  };

  useEffect(() => {
    const storedSubCategory = localStorage.getItem("subCategory");
    const storedCategory = localStorage.getItem("category");
    if (storedSubCategory) {
      setSubCategory(JSON.parse(storedSubCategory));
    }
    if (storedCategory) {
      setCategories(JSON.parse(storedCategory));
    }
  }, []);

  useEffect(() => {
    console.log("subCategories",subCategory);
  },[subCategory])

  return (
    <div className=" h-screen   space-y-6">
      <h1 className="text-2xl sm:text-4xl font-semibold ">Add Sub Categories details :</h1>
      <form action="" onSubmit={handleSubmit} className="grid gap-6">
        <div className="input-values  grid  gap-8">
          <div className="max-w-80">
            <Dropdowns
              label="Category"
              name="category"
              value={formData.category}
              options={categories}
              onChange={(e) => setFormData({ ...formData, category: e.value })}
            />
          </div>
          {formData.subCategories.map((subCategory, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                label={`Sub Category ${index + 1}`}
                name={`subCategory${index}`}
                value={subCategory}
                onChange={(e) => {
                  const newSubCategories = [...formData.subCategories];
                  newSubCategories[index] = e.target.value;
                  setFormData({ ...formData, subCategories: newSubCategories });
                }}
              />
              <Button
                icon="pi pi-trash"
                className=" p-button-danger"
                onClick={() => handleDelete(index)}
              />
            </div>
          ))}
          <Button
            icon="pi pi-plus"
            className=" bg-slate-100 hover:bg-slate-200 text-black rounded-full  w-14 h-14 font-bold hover:bg-slate-200"
            onClick={handleAddMore}
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
        <Tabels categories={subCategory} setCategories={setSubCategory} />
      </div>
    </div>
  );
};

export default SetSubCategory;
