import "./subhome.css";
import Camera from "../../img/camera.png";
import Sightseeing from "../../img/Sightseeing.png";
import Shops from "../../img/Shops.png";
import Where from "../../img/Where.png";
import Natherland from "../../img/natherland.jpg";
import Greece from "../../img/greece.jpg";
import Italy from "../../img/italy.jpg";

const Subhome = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <img src={Camera} alt="" />
          <h2 className="title">Restaurants</h2>
          <p className="info">Aenean commodo ligula eget dolor. Lorem ipsum</p>
        </div>

        <div className="box">
          <img src={Sightseeing} alt="" />
          <h3 className="title">Sightseeing</h3>
          <p className="info">Aenean commodo ligula eget dolor. Lorem ipsum</p>
        </div>

        <div className="box">
          <img src={Shops} alt="" />
          <h2 className="title">Shops & Boutiques</h2>
          <p className="info">Aenean commodo ligula eget dolor. Lorem ipsum</p>
        </div>

        <div className="box">
          <img src={Where} alt="" />
          <h2 className="title">Where to Stay</h2>
          <p className="info">Aenean commodo ligula eget dolor. Lorem ipsum</p>
        </div>
      </div>

      <div className="destination">
        <div className="text-box">
          <h3 className="sub-title">Choose your</h3>
          <h1 className="title">Destination</h1>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an
            commodo ligula eget dolor. Aenean massa. Cum sociis
          </p>
        </div>
        <div className="images">
          <div className="box">
            <img src={Natherland} alt="" />
            <h2 className="title">Natherland</h2>
          </div>

          <div className="box">
            <img src={Greece} alt="" />
            <h2 className="title">Greece</h2>
          </div>

          <div className="box">
            <img src={Italy} alt="" />
            <h2 className="title">Italy</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Subhome;
