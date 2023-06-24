import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/menu">Add/Update Menu</Link>
          </li>
          <li>
            <Link to="/orders">Active Order Details</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming Order Details</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;