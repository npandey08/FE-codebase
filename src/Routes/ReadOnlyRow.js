import React from "react";

const ReadOnlyRow = ({ item,handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
                  <td>{item.itemcode}</td>
                  <td>{item.itemname}</td>
                  <td>{item.price}</td>
                  <td>{item.availabilitystatus}</td>
                  <td>
                    <button type="button" onClick={(event)=> handleEditClick(event, item)}>Edit</button>
                    <button type="button" onClick={() => handleDeleteClick(item.id)}>Delete</button>
                  </td>
        </tr>
    );
};

export default ReadOnlyRow;