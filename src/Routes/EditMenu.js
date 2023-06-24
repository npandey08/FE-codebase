import React from 'react'

function EditMenu({ editForm, handleMenuUpdate, handleChange }) {
    let {id, itemcode, itemname, price, availabilitystatus} = editForm

// PUT request; calls handleMenuUpdate to push changes to the page
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`http://localhost:8000/menu/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editForm),
        })
            .then(resp => resp.json())
            .then(updatedMenu => {
                handleMenuUpdate(updatedMenu)})
    }

    return (
        <div>
            <h4>Edit Menu</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="itemcode" value={itemcode} onChange={handleChange}/>
                <input type="text" name="itemname" value={itemname} onChange={handleChange}/>
                <input type="text" name="price" value={price} onChange={handleChange}/>
                <input type="text" name="availabilitystatus" value={availabilitystatus} onChange={handleChange}/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default EditMenu