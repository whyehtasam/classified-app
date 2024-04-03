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
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2 text-sky-600 hover:bg-slate-100" onClick={() => editAction(rowData)} />
                
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger text-red-600 hover:bg-slate-100" onClick={() => deleteAction(rowData)} />
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
            <Button label="Cancel" icon="pi pi-times" className="mr-2 text-white bg-red-500 py-1 px-2" onClick={() => setVisible(false)} />
            <Button label="Save" icon="pi pi-check" className=" text-white  bg-green-500 py-1 px-2" onClick={saveChanges} />
        </React.Fragment>
    );

    return (
        <div className="card">
            <DataTable value={categories} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="S No." style={{ width: '10%' }}></Column>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="createdDate" header="Created Date" style={{ width: '25%' }}></Column>
                <Column body={actionBodyTemplate} header="Action" style={{ width: '25%' }}></Column>
            </DataTable>

            <Dialog visible={visible} style={{ width: '450px' }} header="Edit Category" modal className="p-fluid" footer={dialogFooter} onHide={() => setVisible(false)}>
                <div className="p-field">
                    <label htmlFor="name" className='text-sm '>Category name :</label>
                    <InputText id="name" value={editData?.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} required autoFocus className="p-invalid p-2 border mt-2" />
                </div>
            </Dialog>
        </div>
    );
}