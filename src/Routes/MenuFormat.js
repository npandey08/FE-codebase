import React from "react";
import "../styles/UpdateMenu.css"


const MenuFormat = ({ itemcode, itemname, price, image, availabilitystatus,actions }) => {
  return (
    <table>
        <tr>
          <td>
            <h5>{itemcode}</h5>
          </td>
          <td>
            <h5>{itemname}</h5>
          </td>
          <td>
            <h4>{price}</h4>
          </td>
          <td>
            <p>{availabilitystatus}</p>
          </td>
          <td>
            <button className="btn-edit">Edit</button>
            <br />
            <button className="btn-delete">Delete</button>
            </td>
        </tr>
    </table>
  );
};

export default MenuFormat;
