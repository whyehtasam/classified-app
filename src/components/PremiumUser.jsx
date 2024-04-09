import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";

export default function PremiumAdsTable() {
  const [ads, setAds] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const calendar = <Calendar value={null} onChange={(e) => this.setState({ date: e.value })} dateFormat="yy-mm-dd" mask="9999-99-99" showIcon />;

  useEffect(() => {
    const data = [
      {
        sNo: 1,
        name: "Premium Ad 1",
        description: "This is a premium ad",
        amount: 100,
        startDate: "2022-01-01",
        endDate: "2022-12-31",
      },
      {
        sNo: 2,
        name: "Premium Ad 2",
        description: "This is another premium ad",
        amount: 200,
        startDate: "2022-01-01",
        endDate: "2022-12-30",
      },
      // ... more data
    ];
    setAds(data);
  }, []);

  const header = (
    <div className="table-header flex justify-end">
      {/* <h5 className="p-m-0">Manage Premium Ads</h5> */}
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
      </span>
    </div>
  );

  return (
    <div className="card">
               <h1 className="text-2xl sm:text-4xl font-semibold mb-5">View Premium user details :</h1>

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
        <Column field="name" header="Premium Ad Name" filter filterPlaceholder="Search by name" />
        <Column field="description" header="Description" filter filterPlaceholder="Search by description" />
        <Column field="amount" header="Amount" filter filterPlaceholder="Search by amount" />
        <Column field="startDate" header="Start Date" filter filterElement={calendar} />
        <Column field="endDate" header="End Date" filter filterElement={calendar} />
      </DataTable>
    </div>
  );
}