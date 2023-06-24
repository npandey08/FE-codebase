
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Routes/Layout.js";
import Home from "../Routes/Home.js";
import Orders from "../Routes/Orders.js";
import NoPage from "../Routes/NoPage.js";
//import UpdateMenu from "../Routes/UpdateMenu.js";
import Upcoming from "../Routes/Upcoming.js";
import MenuDashboard from "../Routes/MenuDashboard.js";

function NavMenu() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<MenuDashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  export default NavMenu;