import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

export default function DetailsTable({ details, setDetails }) {
    const [visible, setVisible] = useState(false);
    const [editData, setEditData] = useState(null);

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editAction(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => deleteAction(rowData)} />
            </React.Fragment>
        );
    };

    const editAction = (rowData) => {
        setEditData(rowData);
        setVisible(true);
    };

    const deleteAction = (rowData) => {
        setDetails(details.filter(detail => detail.id !== rowData.id));
    };

    const saveChanges = () => {
        setDetails(details.map(detail => detail.id === editData.id ? editData : detail));
        setVisible(false);
    };

    const dialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={() => setVisible(false)} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveChanges} />
        </React.Fragment>
    );

    const indexBodyTemplate = (rowData, { rowIndex }) => {
        return (
            <React.Fragment>
                {rowIndex + 1}
            </React.Fragment>
        );
    };

    const descriptionBodyTemplate = (rowData) => {
        // If description is an array of strings
        if (Array.isArray(rowData.description)) {
            return rowData.description.join(', ');
        }
        // If description is an object
        else if (typeof rowData.description === 'object') {
            return JSON.stringify(rowData.description);
        }
        // If description is a string
        else {
            return rowData.description;
        }
    };

    return (
        <div className="card">
            <DataTable value={details} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column body={indexBodyTemplate} header="Sr No" style={{ width: '10%' }}></Column>
                <Column field="category" header="Category" style={{ width: '25%' }}></Column>
                <Column body={descriptionBodyTemplate} header="Description" style={{ width: '40%' }}></Column>
                <Column field="createdDate" header="Created Date" style={{ width: '25%' }}></Column>
                <Column body={actionBodyTemplate} header="Actions" style={{ width: '15%' }}></Column>
            </DataTable>

            <Dialog visible={visible} style={{ width: '450px' }} header="Edit Detail" modal className="p-fluid" footer={dialogFooter} onHide={() => setVisible(false)}>
                <div className="p-field">
                    <label htmlFor="category">Category</label>
                    <InputText id="category" value={editData?.category} onChange={(e) => setEditData({ ...editData, category: e.target.value })} required autoFocus className="p-invalid p-2 border" />
                </div>
                <div className="p-field">
                    <label htmlFor="description">Description</label>
                    <InputText id="description" value={editData?.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} required className="p-invalid p-2 border" />
                </div>
            </Dialog>
        </div>
    );
}