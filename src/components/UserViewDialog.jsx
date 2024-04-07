import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Avatar } from 'primereact/avatar';

export default function UserViewDialog({ data }) {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(data.status);
  const statuses = ["Active", "Inactive"];

  const footerContent = (
    <div className="py-2">
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => {
          setVisible(false);
          setStatus(data.status); // reset status on cancel
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
        header="User Details"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
        maximizable
      >
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container p-5 mx-auto">
            <div className="lg:w-[550px] lg:p-6 mb-6 lg:mb-0">
              <div className="p-d-flex p-ai-center">
                <Avatar icon="pi pi-user" size="large" shape="circle" />
                <h2 className="mt-5 text-xl font-semibold title-font text-gray-500 tracking-widest">{data.name}</h2>
              </div>
              {/* <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">User Details</h1> */}
              
              <p className="leading-relaxed mb-4">Email: {data.email}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Phone</span>
                <span className="ml-auto text-gray-900">{data.phone}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Membership</span>
                <span className="ml-auto text-gray-900">{data.membership}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Wallet Balance</span>
                <span className="ml-auto text-gray-900">${data.wallet_balance}</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-xl text-gray-900">
                <div className="flex mb-4">
                <Dropdown
                  value={status}
                  options={statuses}
                  onChange={(e) => setStatus(e.value)}
                  placeholder="Select a Status"
                />
              </div>
                </span>
              </div>
            </div>
          </div>
        </section>
      </Dialog>
    </div>
  );
}