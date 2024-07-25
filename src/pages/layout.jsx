import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul id="layout-links">
            <li>
                <Link className="page-links" id="nav-logo" to="/">Logo</Link>
            </li>
          <li>
            <Link className="page-links" to="/">Home</Link>
          </li>
          <li>
            <Link className="page-links" to="/About">About</Link>
          </li>
          <li>
            <Link className="page-links" to="/Pong">Pong</Link>
          </li>
          <li>
            <Link className="page-links" to="/Crossword">Crossword</Link>
          </li>
          <li>
            <Link className="page-links" to="/Life">Life</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;