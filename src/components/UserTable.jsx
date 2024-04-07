import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Slider } from "primereact/slider";
import UserViewDialog from "./UserViewDialog";
import { userData } from "./data/AdsData";
export default function UserTable() {
  const [users, setUsers] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    phone: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    userType: { value: null, matchMode: FilterMatchMode.EQUALS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    walletBalance: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [userTypes] = useState([
    "Normal",
    "Premium",
  ]);
  const [statuses] = useState([
    "Active",
    "Inactive",
  ]);

  useEffect(() => {
    const data = [
      {
        sNo: 1,
        name: "User 1",
        email: "user1@example.com",
        phone: "1234567890",
        userType: "Normal",
        status: "Active",
        walletBalance: 100,
      },
      {
        sNo: 2,
        name: "User 2",
        email: "user2@example.com",
        phone: "0987654321",
        userType: "Premium",
        status: "Inactive",
        walletBalance: 200,
      },
      // ... more data
    ];
    setUsers(data);
    setLoading(false);
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-end">
        <span className="p-input-icon-left ">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const statusRowFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.filterApplyCallback(e.value)}
        placeholder="Select One"
        className="p-column-filter"
        showClear
        style={{ minWidth: "12rem" }}
      />
    );
  };

  const userTypeRowFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={userTypes}
        onChange={(e) => options.filterApplyCallback(e.value)}
        placeholder="Select One"
        className="p-column-filter"
        showClear
        style={{ minWidth: "12rem" }}
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex">
         <UserViewDialog data={userData[0]}/>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" />
      </div>
    );
  };

  const header = renderHeader();
  const walletBalanceRowFilterTemplate = (options) => {
    return (
      <Slider
        value={options.value || [0, 1000]}
        onChange={(e) => options.filterApplyCallback(e.value)}
        range
        min={0}
        max={1000}
      />
    );
  };
  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        dataKey="sNo"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        globalFilterFields={["name", "email", "phone", "userType", "status", "walletBalance"]}
        header={header}
        emptyMessage="No users found."
      >
        <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: "12rem" }} />
        <Column field="email" header="Email" filter filterPlaceholder="Search by email" style={{ minWidth: "12rem" }} />
        <Column field="phone" header="Phone" filter filterPlaceholder="Search by phone" style={{ minWidth: "12rem" }} />
        <Column field="userType" header="User Type" filter filterElement={userTypeRowFilterTemplate} style={{ minWidth: "12rem" }} />
        <Column field="status" header="Status" filter filterElement={statusRowFilterTemplate} style={{ minWidth: "12rem" }} />
        <Column field="walletBalance" header="Wallet Balance" filter filterPlaceholder="Search by phone" style={{ minWidth: "12rem" }} />
        <Column field="actions" header="Actions" body={actionBodyTemplate} style={{ minWidth: "12rem" }} />
      </DataTable>
    </div>
  );
}