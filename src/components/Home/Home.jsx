import "./home.css";
import Slider from "../../img/agent.jpg";
import Tour from "../../img/tarragona.jpg";
import Spain from "../../img/spain.jpg";
import Madrid from "../../img/madrid.jpg";
import Barcelona from "../../img/barcelona.jpg";
import Kao from "../../img/kao.jpg";
import Taipei from "../../img/taipei.jpg";
import Tainan from "../../img/tainan.jpg";
import Taiwan from "../../img/taiwan.jpg";
import Brand from "../../img/brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCompass,
  faMapPin,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Subhome from "../Subhome/Subhome";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <img src={Slider} alt="" />
        <h2 className="sub-title">Come With us</h2>
        <h1 className="title">Relax and Enjoy.</h1>
        <p className="info">
          Setsail Travel agency can provide outdoor recreation activities,
          airlines, car rentals, cruise lines, hotels, railways, travel
          insurance, package tours, insurance, VIP airport lounge access
        </p>
        <div className="overlay"></div>
        <div className="search-box">
          <label>
            <FontAwesomeIcon icon={faCompass} color="#9F9F9F" />
          </label>
          <input type="text" name="place" id="place" placeholder="Where To?" />
          <label>
            <FontAwesomeIcon icon={faCalendar} color="#9F9F9F" />
          </label>
          <input type="date" name="date" id="" placeholder="When?" />
          <label>
            <FontAwesomeIcon icon={faMapPin} color="#9F9F9F" />
          </label>
          <input type="text" name="travel" id="" placeholder="Travel Type" />
          <button type="submit">Find Now</button>
        </div>
      </div>
      <div className="holiday-section">
        <h3 className="sub-title">Choose Your</h3>
        <h1 className="title">Perfect Holiday</h1>
        <p className="info">
          Setsail Travel agency can provide outdoor recreation activities,
          airlines, car rentals, cruise lines, hotels, railways, travel
          insurance, package tours
        </p>
      </div>
      <div className="gallery first-row">
        <div className="box">
          <img src={Spain} alt="" />
          <h3 className="row-title">Spain</h3>
          {/* <h4 className="sub-title">
            <FontAwesomeIcon icon={faStar} className="icon" />
            5.0 Good
          </h4>
          <h4 className="price">$1100</h4> */}
        </div>
        <div className="box">
          <img src={Tour} alt="" />
          <h3 className="img-title">Tarragona</h3>
          <h4 className="sub-title">
            <FontAwesomeIcon icon={faStar} className="icon" />
            8.0 
          </h4>
          <h4 className="price">$1740</h4>
        </div>
        <div className="box">
          <img src={Madrid} alt="" />
          <h3 className="img-title">Madrid</h3>
          <h4 className="sub-title">
            <FontAwesomeIcon icon={faStar} className="icon" />
            9.0 
          </h4>
          <h4 className="price">$1100</h4>
        </div>
        <div className="box">
          <img src={Barcelona} alt="" />
          <h3 className="img-title">Barcelona</h3>
          <h4 className="sub-title">
            <FontAwesomeIcon icon={faStar} className="icon" />
            8.3 
          </h4>
          <h4 className="price">$840</h4>
        </div>
        
      </div>

      <div className="gallery second-row">
        
        <div className="box">
          <img src={Kao} alt="" />
          <h3 className="img-title">Kaohsiung</h3>
          <h4 className="sub-title">
            <FontAwesomeIcon icon={faStar} className="icon" />
            7.8
          </h4>
          <h4 className="price">$963</h4>
        </div>
        <div className="box">
          <img src={Taipei} alt="" />
          <h3 className="img-title">Taipei</h3>
          <h4 className="sub-title">
            <FontAwesomeIcon icon={faStar} className="icon" />
            8.1
          </h4>
          <h4 className="price">$920</h4>
        </div>
        <div className="box">
          <img src={Tainan} alt="" />
          <h3 className="img-title">Tainan</h3>
          <h4 className="sub-title">
            <FontAwesomeIcon icon={faStar} className="icon" />
            7.8
          </h4>
          <h4 className="price">$999</h4>
        </div>
        <div className="box">
          <img src={Taiwan} alt="" />
          <h3 className="row-title">Taiwan</h3>
          {/* <h4 className="sub-title">
            <FontAwesomeIcon icon={faStar} className="icon" />
            5.0 Good
          </h4>
          <h4 className="price">$1100</h4> */}
        </div>
        
      </div>

      <div className="brand">
        <img src={Brand} alt="" />
      </div>
      <Subhome />
    </>
  );
};
export default Home;
