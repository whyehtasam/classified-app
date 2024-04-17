import React, { useState, useEffect } from "react";
import Input from "./Inputs";
import DetailsTable from "./DetailsTable";
import Dropdowns from "./Dropdowns";
import { Button } from "primereact/button";

const SetDetails = () => {
  const [details, setDetails] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    descriptions: [""],
  });
  const [categories, setCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDetail = {
      id: details.length + 1,
      category: formData.category,
      descriptions: formData.descriptions,
      createdDate: new Date().toISOString().slice(0, 10),
    };
    setDetails([...details, newDetail]);
    localStorage.setItem("details", JSON.stringify([...details, newDetail]));
    setFormData({ category: "", descriptions: [""] });
    console.log(newDetail);
  };

  const handleAddMore = () => {
    setFormData({
      ...formData,
      descriptions: [...formData.descriptions, ""],
    });
  };

  const handleDelete = (index) => {
    const newDescriptions = [...formData.descriptions];
    newDescriptions.splice(index, 1);
    setFormData({ ...formData, descriptions: newDescriptions });
  };

  useEffect(() => {
    const storedDetails = localStorage.getItem("details");
    const storedCategories = localStorage.getItem("category");
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  }, []);

//   useEffect(() => {
//     console.log("deatils",details);
//   },[details])

  return (
    <div className="h-screen space-y-6">
      <h1 className="text-2xl sm:text-4xl font-semibold ">
        Add Details:
      </h1>
      <form action="" onSubmit={handleSubmit} className="grid gap-6">
        <div className="input-values grid gap-8">
          <div className="max-w-80">
            <Dropdowns
              label="Category"
              name="category"
              value={formData.category}
              options={categories}
              onChange={(e) => setFormData({ ...formData, category: e.value })}
            />
          </div>
          {formData.descriptions.map((description, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                label={`Description ${index + 1}`}
                name={`description${index}`}
                value={description}
                onChange={(e) => {
                  const newDescriptions = [...formData.descriptions];
                  newDescriptions[index] = e.target.value;
                  setFormData({ ...formData, descriptions: newDescriptions });
                }}
              />
              <Button
                icon="pi pi-trash"
                className="p-button-danger"
                onClick={() => handleDelete(index)}
              />
            </div>
          ))}
          <Button
            icon="pi pi-plus"
            className="bg-slate-100  text-black rounded-full w-14 h-14 font-bold hover:bg-slate-200"
            onClick={handleAddMore}
          />
        </div>
        <div>
          <button
            className="border px-8 py-2 rounded-md bg-green-500 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="">
        {/* <DetailsTable details={details} setDetails={setDetails} /> */}
      </div>
    </div>
  );
};

export default SetDetails;