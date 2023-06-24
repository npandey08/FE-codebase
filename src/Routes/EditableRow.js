import React from "react";

function EditableRow({ editFormData, handleEditFormChange, handleCancelClick}) {
    return(
        <tr>
            <td>
                <input 
                    type="text"
                    required="required"
                    placeholder="Enter item code..."
                    name="itemcode"
                    value={editFormData.itemcode}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input 
                    type="text"
                    required="required"
                    placeholder="Enter item name..."
                    name="itemname"
                    value={editFormData.itemname}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input 
                    type="text"
                    required="required"
                    placeholder="Enter price.."
                    name="price"
                    value={editFormData.price}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input 
                    type="text"
                    required="required"
                    placeholder="Enter status..."
                    name="availabilitystatus"
                    value={editFormData.availabilitystatus}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="submit" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow;