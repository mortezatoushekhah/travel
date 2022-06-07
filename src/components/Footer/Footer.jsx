import "./footer.css";
import Logo from "../../img/logo.png";
import One from "../../img/one.jpg";
import Two from "../../img/two.jpg";
import Three from "../../img/three.jpg";
import Four from "../../img/four.jpg";
import Five from "../../img/five.jpg";
import Six from "../../img/six.jpg";
import Seven from "../../img/seven.jpg";
import Eight from "../../img/eight.jpg";
import Nine from "../../img/nine.jpg";
import Ten from "../../img/ten.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="top-footer">
        <h2>Subscribe Now and Quench Your Wanderlust!</h2>
        <button>JOIN NOW</button>
      </div>
      <div className="footer">
        <div className="col">
          <img src={Logo} alt="" />
          <p className="info">
            Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae
          </p>
          <p className="email">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            setsail@example.com
          </p>
          <p className="phone">
            <FontAwesomeIcon className="icon" icon={faPhone} />1 562 867 5309
          </p>
          <p className="address">
            <FontAwesomeIcon className="icon" icon={faMapMarker} />
            Broadway & Morris St, New York
          </p>
        </div>

        <div className="col">
          <h2 className="title">Subscribe to our Newsletter</h2>
          <p className="info">
            Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
          </p>
          <div className="form-row">
            <label>
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input type="text" name="name" id="" placeholder="Name" />
          </div>
          <div className="form-row">
            <label>
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input type="email" name="email" id="" placeholder="Email" />
          </div>

          <button>Subscribe</button>
        </div>

        <div className="col">
          <h2 className="title">Our Instagram</h2>
          <p className="info">
            Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus.
            Phasellus null
          </p>
          <div className="gallery">
            <div className="first-row">
              <img src={One} alt="" />
              <img src={Two} alt="" />
              <img src={Three} alt="" />
              <img src={Four} alt="" />
              <img src={Five} alt="" />
            </div>
              
            <div className="second-row">
            <img src={Six} alt="" />
              <img src={Seven} alt="" />
              <img src={Eight} alt="" />
              <img src={Nine} alt="" />
              <img src={Ten} alt="" />
            </div>
          </div>
        </div>

      </div>

      <div className="copy">
          <p><span>© 2022</span> Qode Interactive</p>
        </div>
    </>
  );
};
export default Footer;
