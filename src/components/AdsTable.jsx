import  { useState, useEffect } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import AdsViewDialog from "./AdsViewDialog";
import { AdsUserData } from "./data/AdsData";

export default function AdsTable() {

  const [ads, setAds] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    subCategory: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    userEmail: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    membership: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    price: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [statuses] = useState([
    "Published",
    "Unpublished",
  ]);
  const [memberships] = useState([
    "Normal",
    "Premium",
  ]);

  useEffect(() => {
    const data = [
      {
        sNo: 1,
        title: "Ad 1",
        category: "Category 1",
        subCategory: "Sub Category 1",
        userEmail: "user1@example.com",
        membership: "Normal",
        price: 100,
        status: "Published",
      },
      {
        sNo: 2,
        title: "Ad 2",
        category: "Category 2",
        subCategory: "Sub Category 2",
        userEmail: "user2@example.com",
        membership: "Premium",
        price: 200,
        status: "Unpublished",
      },
      // ... more data
    ];
    setAds(data);
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
            className="px-18 py-3"
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

  const membershipRowFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={memberships}
        onChange={(e) => options.filterApplyCallback(e.value)}
        placeholder="Select One"
        className="p-column-filter"
        showClear
        style={{ minWidth: "12rem" }}
      />
    );
  };

  const actionBodyTemplate = () => {
    return (
      <div className="flex">
    
        <AdsViewDialog data={AdsUserData}/>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" />
      </div>
    );
  };

  const header = renderHeader();
  // const priceRowFilterTemplate = (options) => {
  //   return (
  //     <Slider
  //       value={options.value || [0, 1000]}
  //       onChange={(e) => options.filterApplyCallback(e.value)}
  //       range
  //       min={0}
  //       max={1000}
  //     />
  //   );
  // };
  return (
    <div className="card">
      <DataTable
  value={ads}
  paginator
  rows={5}
  rowsPerPageOptions={[5, 10, 25, 50]}
  dataKey="sNo"
  filters={filters}
  filterDisplay="row"
  loading={loading}
  globalFilterFields={["title", "category", "subCategory", "userEmail", "membership", "price", "status"]}
  header={header}
  emptyMessage="No ads found."
  
>
        <Column field="title" header="Title" filter filterPlaceholder="Search by title" style={{ minWidth: "12rem" }} />
        <Column field="category" header="Category" filter filterPlaceholder="Search by category" style={{ minWidth: "12rem" }} />
        <Column field="subCategory" header="Sub Category" filter filterPlaceholder="Search by sub category" style={{ minWidth: "12rem" }} />
        <Column field="userEmail" header="User Email" filter filterPlaceholder="Search by user email" style={{ minWidth: "12rem" }} />
        <Column field="membership" header="Membership" filter filterElement={membershipRowFilterTemplate} style={{ minWidth: "12rem" }} />
        <Column field="price" header="Price" filter  filterPlaceholder="Search by Price"style={{ minWidth: "12rem" }} />
        <Column field="status" header="Status" filter filterElement={statusRowFilterTemplate} style={{ minWidth: "12rem" }} />
        <Column field="actions" header="Actions" body={actionBodyTemplate} style={{ minWidth: "12rem" }} />
      </DataTable>
    </div>
  );
}