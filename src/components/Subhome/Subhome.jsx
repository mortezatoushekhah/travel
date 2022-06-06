import "./subhome.css";
import Camera from "../../img/camera.png";
import Sightseeing from "../../img/Sightseeing.png";
import Shops from "../../img/Shops.png";
import Where from "../../img/Where.png";

const Subhome = () => {
  return(
    <>
      <div className="container">
        <div className="box">
          <img src={Camera} alt="" />
          <h2 className="title">Restaurants</h2>
          <p className="info">
          Aenean commodo ligula eget dolor. Lorem ipsum
          </p>
        </div>

        <div className="box">
          <img src={Sightseeing} alt="" />
          <h3 className="title">Sightseeing</h3>
          <p className="info">
          Aenean commodo ligula eget dolor. Lorem ipsum
          </p>
        </div>

        <div className="box">
          <img src={Shops} alt="" />
          <h2 className="title">Shops & Boutiques</h2>
          <p className="info">
          Aenean commodo ligula eget dolor. Lorem ipsum
          </p>
        </div>

        <div className="box">
          <img src={Where} alt="" />
          <h2 className="title">Where to Stay</h2>
          <p className="info">
          Aenean commodo ligula eget dolor. Lorem ipsum
          </p>
        </div>
      </div>
    </>

  ) 
};
export default Subhome;
