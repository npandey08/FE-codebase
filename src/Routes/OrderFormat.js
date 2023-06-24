import React from "react";
import "../styles/UpdateMenu.css"


const OrderFormat = ({ sno, customername, orderid, orderdate, orderamount,orderstatus}) => {
    if (!sno) return <h5>No Order</h5>;

  return (
    <table>
        <tr>
          <td>
            <h5>{sno}</h5>
          </td>
          <td>
            <h5>{customername}</h5>
          </td>
          <td>
            <h5>{orderid}</h5>
          </td>
          <td>
            <h5>{orderdate}</h5>
          </td>
          <td>
            <h5>{orderamount}</h5>
          </td>
          <td>
            <h5>{orderstatus}</h5>
          </td>
        </tr>
    </table>
  );
};

export default OrderFormat;
