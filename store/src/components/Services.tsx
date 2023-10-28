import "../css/services.css";
import { useEffect } from "react";
// import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Aos from "aos";

function Services() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="image-gallery">
      <h2 className="gallery-title">Our services</h2>

      <div data-aos="fade-up" className="services">
        <div>
          <p>CNC cutting</p>
          <img className="icon" src="/icons/cnc.png" alt="" />
        </div>

        <div>
          <p>Laser engraving</p>
          <img className="icon" src="/icons/laser3.png" alt="" />
        </div>
        <div>
          <p>3D modeling</p>
          <img className="icon icon2" src="/icons/3d-modeling2.png" alt="" />
        </div>
        <div>
          <p>Plywood work</p>
          <img className="icon icon2" src="/icons/plywood.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services;
