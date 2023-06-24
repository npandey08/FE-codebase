import React, {useState} from "react";
import "../styles/UpdateMenu.css"




const OrderFormat = ({ sno, odrid, orderdate, orderamount,ordercontains, paymentstatus}) => {
   

    const [status, setStatus] =useState(null);

    const handleAcceptClick = (event) => {
        event.preventDefault();
        setStatus("Order Accepted");
      };

      const handleRejectClick = (event) => {
        event.preventDefault();
        setStatus("Order Rejected");
      };


      if (!sno) return <h5>No Upcoming Order</h5>;

  return (
    <table>
        <tr>
          <td>
            <h5>{sno}</h5>
          </td>
          <td>
            <h5>{odrid}</h5>
          </td>
          <td>
            <h5>{orderdate}</h5>
          </td>
          <td>
            <h5>{orderamount}</h5>
          </td>
          <td>
            <h5>{ordercontains}</h5>
          </td>
          <td>
            <h5>{paymentstatus}</h5>
          </td>
          <td>
            <button className="btn-accept-order" style={{background:'cyan', width:'100px'}} onClick={(event)=> handleAcceptClick(event)}>Accept Order</button><br/>
            <button className="btn-reject-order" style={{background:'red', width:'100px'}} onClick={(event)=> handleRejectClick(event)}>Reject Order</button>
            </td>
            <td>
              <h5>{status}</h5>
            </td>
        </tr>
    </table>
  );
};

export default OrderFormat;
