
import React, { useEffect, useState } from "react";
import Menus from "./Menus";
import AddMenu from './AddMenu'

function MenuDashboard() {
// set state
  const [menus, setMenus] = useState([]);
  

// first data grab
  useEffect(() => {
    fetch("http://localhost:8000/menu/") 
      .then(resp => resp.json())
      .then(data => setMenus(data)) // set data to state
  }, []);

// update menu on page after edit
function onUpdateMenu(updatedMenu) {
    const updatedMenus = menus.map(
      menu => {
        if (menu.id === updatedMenu.id) {
          return updatedMenu
        } else {return menu}
      }
    )
    setMenus(updatedMenus)
  }


return (
    <div>
      <Menus
        menus={menus}
        onUpdateMenu={onUpdateMenu}
      />
      <AddMenu />
    </div>
  );
}
export default MenuDashboard