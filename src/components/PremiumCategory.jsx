import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

export default function PremiumCategoryTable() {
  const [ads, setAds] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [newAd, setNewAd] = useState({
    name: "",
    description: "",
    amount: null,
    startDate: null,
    endDate: null,
  });

  const header = (
    <div className="table-header flex justify-end">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search"
        />
      </span>
    </div>
  );

  const addAd = () => {
    setAds([...ads, { ...newAd, sNo: ads.length + 1 }]);
    setNewAd({
      name: "",
      description: "",
      amount: null,
      startDate: null,
      endDate: null,
    });
  };

  const deleteAd = (index) => {
    setAds(ads.filter((ad, i) => i !== index));
  };

  const actionBodyTemplate = (rowData, index) => {
    return (
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger"
        onClick={() => deleteAd(index)}
      />
    );
  };

  return (
    <div className="card">
      <h1 className="text-2xl sm:text-4xl font-semibold mb-5">
        Add premium category details :
      </h1>

      <div className="p-fluid p-formgrid grid sm:grid-cols-2 grid-cols-1 gap-6 mb-6">
        <div className="p-field p-col">
          <label htmlFor="name">Premium Ad Name</label>
          <InputText
            id="name"
            value={newAd.name}
            onChange={(e) => setNewAd({ ...newAd, name: e.target.value })}
          />
        </div>
        <div className="p-field p-col">
          <label htmlFor="description">Description</label>
          <InputText
            id="description"
            value={newAd.description}
            onChange={(e) =>
              setNewAd({ ...newAd, description: e.target.value })
            }
          />
        </div>
        <div className="p-field p-col">
          <label htmlFor="amount">Amount</label>
          <InputNumber
            id="amount"
            value={newAd.amount}
            onValueChange={(e) => setNewAd({ ...newAd, amount: e.value })}
            mode="currency"
            currency="USD"
            locale="en-US"
          />
        </div>
        <div className="p-field p-col">
          <label htmlFor="startDate">Start Date</label>
          <Calendar
            id="startDate"
            value={newAd.startDate}
            onChange={(e) => setNewAd({ ...newAd, startDate: e.value })}
            dateFormat="yy-mm-dd"
            mask="9999-99-99"
            showIcon
          />
        </div>
        <div className="p-field p-col">
          <label htmlFor="endDate">End Date</label>
          <Calendar
            id="endDate"
            value={newAd.endDate}
            onChange={(e) => setNewAd({ ...newAd, endDate: e.value })}
            dateFormat="yy-mm-dd"
            mask="9999-99-99"
            showIcon
          />
        </div>
        <div className="p-field p-col w-fit">
        <label className="text-white">add</label>
          <Button label="Add Premium" onClick={addAd} />
        </div>
      </div>

      <DataTable
        value={ads}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        dataKey="sNo"
        emptyMessage="No ads found."
        globalFilter={globalFilter}
        header={header}
       
      >
        <Column
          field="name"
          header="Premium Category"
          filter
          filterPlaceholder="Search by name"
          
        />
        <Column
          field="description"
          header="Description"
          filter
          filterPlaceholder="Search by description"
        />
        <Column
          field="amount"
          header="Amount"
          filter
          filterPlaceholder="Search by amount"
        />
        <Column
          field="startDate"
          header="Start Date"
          body={(rowData) => rowData.startDate.toLocaleDateString()}
          filter
          filterElement={
            <Calendar dateFormat="yy-mm-dd" mask="9999-99-99" showIcon />
          }
        />
        <Column
          field="endDate"
          header="End Date"
          body={(rowData) => rowData.endDate.toLocaleDateString()}
          filter
          filterElement={
            <Calendar dateFormat="yy-mm-dd" mask="9999-99-99" showIcon />
          }
        />
        <Column body={actionBodyTemplate} header="Action" />
      </DataTable>
    </div>
  );
}
