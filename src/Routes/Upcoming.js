import '../styles/UpdateMenu.css';
//import { orderDetail } from '../datas/orderdetails';
import UpcomingOrderFmt from './UpcomingOrderFmt';
import "../styles/UpdateMenu.css";
import React, {useEffect, useState} from 'react';



function Upcoming() {


  const [orderdetails, setOrderdetails] = useState([]);
  

  // first data grab
    useEffect(() => {
      fetch("http://localhost:8000/orderdetail/") 
        .then(resp => resp.json())
        .then(data => setOrderdetails(data)) // set data to state
    }, []);
    return (
        <div className="UpdateMenu">
          <div className='heading'>Upcoming Order Details</div>
          <table>
            <tr>
              <th>S. No.</th>
              <th>Order Id</th>
              <th>Order Date</th>
              <th>Order Amount</th>
              <th>Order Details</th>
              <th>Payment Status</th>
              <th>Actions</th>
              <th>Status</th>
            </tr>
            </table>
            {orderdetails.map((data, key) => {
              return (
                <div key={key}>
                  <UpcomingOrderFmt
                    key={key}
                    sno={data.sno}
                    odrid={data.odrid}
                    orderdate={data.orderdate}
                    orderamount={data.orderamount}
                    //ordercontains={data.ordercontains.map((list, index) => {
                      // return <div key={index}>{list}</div>
                    ordercontains={data.ordercontains}
                    
                    paymentstatus={data.paymentstatus}
                  />
                </div>
              )
            })}
        </div>
      );
}
  
export default Upcoming;