import React, {useState} from 'react'
import Menu from './Menu'
import EditMenu from './EditMenu'
import "../styles/UpdateMenu.css";


function Menus({menus, onUpdateMenu}) {
// state for conditional render of edit form
  const [isEditing, setIsEditing] = useState(false);
// state for edit form inputs
  const [editForm, setEditForm] = useState({
    itemcode: "",
    itemname: "",
    price: "",
    availabilitystatus: ""
  })

// when PATCH request happens; auto-hides the form, pushes changes to display
  function handleMenuUpdate(updatedMenu) {
      setIsEditing(false);
      onUpdateMenu(updatedMenu);
    }

// capture user input in edit form inputs
  function handleChange(e) {
    setEditForm({
    ...editForm,
    [e.target.name]: e.target.value
    })
  }

// needed logic for conditional rendering of the form - shows the menu you want when you want them, and hides it when you don't
  function changeEditState(menu) {
    if (menu.id === editForm.id) {
      setIsEditing(isEditing => !isEditing) // hides the form
    } else if (isEditing === false) {
      setIsEditing(isEditing => !isEditing) // shows the form
    }
  }

// capture the menu you wish to edit, set to state
  function captureEdit(clickedMenu) {
    let filtered = menus.filter(menu => menu.id === clickedMenu.id)
    setEditForm(filtered[0])
  }

  return (
      <div className="UpdateMenu">
        {isEditing?
          (<EditMenu
            editForm={editForm}
            handleChange={handleChange}
            handleMenuUpdate={handleMenuUpdate}
          />) : null}
        <table>
          <thead>
            <tr>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Availability status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              { menus.map(menu =>
                <Menu
                  key={menu.id}
                  menu={menu}
                  captureEdit={captureEdit}
                  changeEditState={changeEditState}
                />) }
          </tbody>
        </table>
      </div>
   )
}
export default Menus;