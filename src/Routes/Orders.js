import '../styles/UpdateMenu.css';
//import { orderData } from '../datas/orderdata';
import OrderFormat from './OrderFormat';
import "../styles/UpdateMenu.css";
import React,{useEffect, useState} from 'react';

function Orders() {

  const [orderdatas, setOrderdatas] = useState([]);
  

  // first data grab
    useEffect(() => {
      fetch("http://localhost:8000/orderdata/") 
        .then(resp => resp.json())
        .then(data => setOrderdatas(data)) // set data to state
    }, []);

  if(orderdatas.length===0){ return(<h4>No Active Orders</h4>)};
    return (
        <div className="UpdateMenu">
          <div className='heading'>Active Order Details</div>
          <table>
            <tr>
              <th>S. No.</th>
              <th>Customer Name</th>
              <th>Order Id</th>
              <th>Order Date</th>
              <th>Order Amount</th>
              <th>Order Status</th>
            </tr>
            </table>
            {orderdatas.map((data, key) => {
              return (
                <div key={key}>
                  <OrderFormat
                    key={key}
                    sno={data.sno}
                    customername={data.customername}
                    orderid={data.orderid}
                    orderdate={data.orderdate}
                    orderamount={data.orderamount}
                    orderstatus={data.orderStatus}
                  />
                </div>
              )
            })}
        </div>
      );
}
  
export default Orders;