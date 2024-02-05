import { useEffect } from "react";
// import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Aos from "aos";

function Services() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <div       data-aos='fade-up'
     className="  text-slate-800 text-sm font-normal bg-gray-100 pb-20 pt-20  mx-auto">
      <h2 className="mx-auto flex justify-center mt-4 mb-4 gallery-title text-gray-700 text-3xl  font-normal tracking-tight">
        Our services
      </h2>

      <div
        className="grid md:grid-cols-4	mt-20 text-xl grid-cols-2 gap-8 w-10/12 mx-auto   "
      >
        <div className=" justify-center flex flex-col items-center mx-auto w-40  ">
          <p>CNC cutting</p>
          <img className=" w-20 m-4" src="/icons/cnc.png" alt="" />
        </div>

        <div className=" justify-center flex flex-col items-center w-40 mx-auto ">
          <p>Laser engraving</p>
          <img className=" w-20 m-4" src="/icons/laser3.png" alt="" />
        </div>
        <div className=" justify-center flex flex-col items-center w-40 mx-auto ">
          <p>3D modeling</p>
          <img className=" w-20 m-4" src="/icons/3d-modeling2.png" alt="" />
        </div>
        <div className=" justify-center flex flex-col items-center w-40 mx-auto    ">
          <p>Plywood work</p>
          <img className=" w-20 m-4" src="/icons/plywood.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services;
