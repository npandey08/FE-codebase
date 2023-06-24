import '../styles/UpdateMenu.css';
import data from '../datas/data.json';
//import MenuFormat from './MenuFormat';
import "../styles/UpdateMenu.css";
import {nanoid} from 'nanoid';
import React, {Fragment, useState } from "react";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

function UpdateMenu() {

  const [items, setItems] = useState(data);
  const [addFormData, setAddFormData] = useState({
    itemcode: '',
    itemname: '',
    price: '',
    availabilitystatus: ''
  })

  const handleAddFormchange =(event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
  
    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }


  const handleAddFormSubmit =(event) => {
    event.preventDefault();
    const newItem = {
      id: nanoid(),
      itemcode: addFormData.itemcode,
      itemname: addFormData.itemname,
      price: addFormData.price,
      availabilitystatus: addFormData.availabilitystatus
    }
    const newItems =[...items, newItem];
    setItems(newItems);
  }


  const [editFormData, setEditFormData] = useState({
    itemcode: '',
    itemname: '',
    price: '',
    availabilitystatus: ''
  })

  const [editItemId, setEditItemId] =useState(null);

  const handleEditFormChange =(event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
  
    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  }


  const handleEditFormSubmit =(event) => {
    event.preventDefault();
    const editedItem = {
      id: editItemId,
      itemcode: editFormData.itemcode,
      itemname: editFormData.itemname,
      price: editFormData.price,
      availabilitystatus: editFormData.availabilitystatus
    }
    const newItems =[...items];
    const index = items.findIndex((item) => item.id === editItemId );
    newItems[index] = editedItem;

    setItems(newItems);
    setEditItemId(null);
  }

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditItemId(item.id);
  
    const formValues ={
      itemcode: item.itemcode,
      itemname: item.itemname,
      price: item.price,
      availabilitystatus: item.availabilitystatus,
    }
    setEditFormData(formValues);
  };

  const handleDeleteClick = (itemId) => {
    const newItems = [...items];
    const index = items.findIndex((item)=> item.id === itemId);
    newItems.splice(index,1);
    setItems(newItems);
  }
  
  const handleCancelClick = () => {
    setEditItemId(null);
  }

    return (
        <div className="UpdateMenu">
          <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
            <tr>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Stock Availability status</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Fragment>
                  {editItemId === item.id ? (
                      <EditableRow 
                        editFormData={editFormData} 
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}  
                      />
                  ) : (<ReadOnlyRow item={item} 
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick} />)
                }
                </Fragment> 
              ))}
            </tbody>
          </table>
          </form>
            <h2>Add Menu Item</h2>
            <form onSubmit={handleAddFormSubmit}>
            <input type="text" name="itemcode" required="required" placeholder="Enter itemcode..." onChange={handleAddFormchange} />
            <input type="text" name="itemname" required="required" placeholder="Enter Item Name..." onChange={handleAddFormchange} />
            <input type="text" name="price" required="required" placeholder="Enter price of item..." onChange={handleAddFormchange} />
            <input type="text" name="availabilitystatus" required="required" placeholder="Enter Availability Status..." onChange={handleAddFormchange} />
            <button type="submit">Add</button>
          </form>
        </div>
      );
}
  
export default UpdateMenu;