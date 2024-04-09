import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

export default function Tables({ categories, setCategories }) {
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
    const subCategoriesBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {rowData.subCategories.join(', ')}
            </React.Fragment>
        );
    };

    const editAction = (rowData) => {
        setEditData(rowData);
        setVisible(true);
    };

    const deleteAction = (rowData) => {
        setCategories(categories.filter(category => category.id !== rowData.id));
    };

    const saveChanges = () => {
        setCategories(categories.map(category => category.id === editData.id ? editData : category));
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

    return (
        <div className="card">
            <DataTable value={categories} paginator  rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column body={indexBodyTemplate} header="S No." style={{ width: '10%' }}></Column>
                <Column field="name" header="Category" style={{ width: '25%' }}></Column>
                <Column field="createdDate" header="Created Date" style={{ width: '25%' }}></Column>
                <Column body={actionBodyTemplate} header="Action" style={{ width: '25%' }}></Column>
            </DataTable>

            <Dialog visible={visible} style={{ width: '450px' }} header="Edit Category" modal className="p-fluid" footer={dialogFooter} onHide={() => setVisible(false)}>
                <div className="p-field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={editData?.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} required autoFocus className="p-invalid p-2 border" />
                </div>
            </Dialog>
        </div>
    );
}