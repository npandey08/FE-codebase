import React, { useState } from 'react'
import "../styles/UpdateMenu.css"

function AddMenu() {

    const [itemcode, setItemcode] = useState("");
  const [itemname, setItemname] = useState("");
  const [price, setPrice] = useState("");
  const [availabilitystatus, setAvailabilitystatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newMenu ={
        itemcode : itemcode,
          itemname: itemname,
          price: price,
          availabilitystatus: availabilitystatus,
    }
    fetch('http://localhost:8000/menu/', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(newMenu)
    })
    .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
};


    return (
        <div>
            <h2>Add Menu Item</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" value={itemcode} placeholder="Enter itemcode..." onChange={(e) => setItemcode(e.target.value)} />
            <input type="text" value={itemname} placeholder="Enter Item Name..." onChange={(e) => setItemname(e.target.value)} />
            <input type="text" value={price} placeholder="Enter Item Prices..." onChange={(e) => setPrice(e.target.value)} />
            <input type="text" value={availabilitystatus} placeholder="Enter Item Availability..." onChange={(e) => setAvailabilitystatus(e.target.value)} />
            <button type="submit">Add</button>
            
          </form>
        </div>
    );
}
export default AddMenu