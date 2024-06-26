import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

//import { link } from 'react-router-dom';
//import NavBar from '/'

function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <div className="px-8 py-2 text-white bg-gray-400">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "/" ? "nav-link active" : "nav-link text-black"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AboutMe"
            // Check to see if the currentPage is `AboutMe`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/AboutMe" ? "nav-link active" : "nav-link text-black"
            }
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link text-black"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/ContactMe"
            // Check to see if the currentPage is `Contact Me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/ContactMe" ? "nav-link active" : "nav-link text-black"
            }
          >
            Contact Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link text-black"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
