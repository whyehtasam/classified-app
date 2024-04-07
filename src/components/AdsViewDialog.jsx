import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import AdsGallery from "./AdsGallery";
export default function AdsViewDialog({ data }) {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(data.add_status);
  const statuses = ["Published", "Unpublished"];

  const footerContent = (
    <div className="py-2">
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => {
          setVisible(false);
          setStatus(data.add_status); // reset status on cancel
        }}
        className="p-button-text border border-gray-300 mr-2"
      />
      <Button
        label="Save"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Button
        icon="pi pi-eye"
        onClick={() => setVisible(true)}
        className="p-button-rounded p-button-success mr-2"
      />
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
        maximizable
      >
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container p-5 mx-auto">
            <div className="lg:flex-row lg:mx-auto flex flex-wrap justify-center">
              
              <AdsGallery/>
              <div className="lg:w-[550px]    lg:p-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {data.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                  {data.Title}
                </h1>
                <div className="flex mb-4">
                  <Dropdown
                    value={status}
                    options={statuses}
                    onChange={(e) => setStatus(e.value)}
                    placeholder="Select a Status"
                  />
                </div>
                <p className="leading-relaxed mb-4">{data.description}</p>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Sub Category</span>
                  <span className="ml-auto text-gray-900">
                    {data.sub_category}
                  </span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Quantity</span>
                  <span className="ml-auto text-gray-900">{data.quantity}</span>
                </div>
                <div className="flex border-t border-b  border-gray-200 py-2">
                  <span className="text-gray-500">Price</span>
                  <span className="ml-auto text-gray-900">${data.price}</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Address</span>
                  <span className="ml-auto text-gray-900">{data.State},{data.City}</span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-xl text-gray-900">
                    Contact: {data.name}, {data.phone}
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Email Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Dialog>
    </div>
  );
}
