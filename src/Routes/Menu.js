import React from 'react'

function Menu({menu, menu:{id, itemcode, itemname, price, availabilitystatus}, captureEdit, changeEditState}) {

    return (
        <tr key={id}>
            <td>{itemcode}</td>
            <td>{itemname}</td>
            <td>{price}</td>
            <td>{availabilitystatus}</td>
            <td>
                <button
                  onClick={() => {
                    captureEdit(menu);
                    changeEditState(menu)
                  }}
                >
                  Edit
                </button>
                
            </td>
        </tr>
    )
}
export default Menu