import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link className="link-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/destinations">
                Destinations
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/tours">
                Tours
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/shop">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
