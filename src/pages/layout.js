import { Link, Nav, NavLink } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="./../features/humanresource/personnel">Personnel</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Layout;
