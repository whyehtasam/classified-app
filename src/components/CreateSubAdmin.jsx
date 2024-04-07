import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

const CreateSubAdmin = () => {
  const [subAdmins, setSubAdmins] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addSubAdmin = () => {
    setSubAdmins([...subAdmins, { userName, email }]);
    setUserName("");
    setEmail("");
  };

  const deleteSubAdmin = (rowData) => {
    setSubAdmins(subAdmins.filter(subAdmin => subAdmin.userName !== rowData.userName));
  };

  const openEditDialog = (index) => {
    setEditIndex(index);
    setUserName(subAdmins[index].userName);
    setEmail(subAdmins[index].email);
    setEditDialogVisible(true);
  };

  const saveEdit = () => {
    const updatedSubAdmins = [...subAdmins];
    updatedSubAdmins[editIndex] = { userName, email };
    setSubAdmins(updatedSubAdmins);
    setEditDialogVisible(false);
  };

  const actionBodyTemplate = (rowData, index) => {
    return (
        <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => openEditDialog(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => deleteSubAdmin(rowData)}
        />
      </React.Fragment>
    );
  };

  const renderEditDialog = () => {
    return (
      <Dialog
        header="Edit Sub-Admin"
        visible={editDialogVisible}
        onHide={() => setEditDialogVisible(false)}
        modal
        style={{ width: '50vw' }}
      >
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="username">User Name</label>
            <InputText
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="p-field">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <Button label="Save" onClick={saveEdit} />
      </Dialog>
    );
  };

  return (
    <div>
      <h3>Create Sub-Admin</h3>
      <div className="flex space-x-4 my-8">
        <div className="flex-1">
          {/* <label htmlFor="username">User Name</label> */}
          <InputText
            id="username"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          {/* <label htmlFor="email">Email</label> */}
          <InputText
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>
        <Button label="Add Sub-Admin" onClick={addSubAdmin} />
      </div>
      {/* <h3>Sub-Admins</h3> */}
      <DataTable value={subAdmins}>
  <Column field="userName" header="User Name" />
  <Column field="email" header="Email" />
  <Column body={actionBodyTemplate} header="Action" />
</DataTable>
{renderEditDialog()}
    </div>
  );
};

export default CreateSubAdmin;