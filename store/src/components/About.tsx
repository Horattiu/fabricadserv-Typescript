// import Navbar from "./Navbar";
// import Footer from "./Footer";

// function About() {
//   return (
//     <>
//       <Navbar />
//       <div className=" max-w-screen-lg mx-auto  min-h-screen bg-blue-100 ">
//         <h1 className="text-2xl font-medium ">about us</h1>
//         <div></div>
//         <div className="bg-red-400">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar,
//           massa vel euismod faucibus, metus neque ultrices justo, vel tristique
//           lorem libero nec nisi. Nullam at risus id odio vehicula commodo. In
//           dictum, orci sit amet fringilla facilisis, ligula erat dictum nisi, ac
//           malesuada sapien nunc nec ex. Integer euismod purus id felis
//           hendrerit, eget bibendum risus hendrerit. Aenean nec libero nec neque
//           facilisis euismod. Nunc ultricies quam eget risus tincidunt volutpat.
//           Nulla facilisi. Cras auctor auctor erat ac rhoncus. Fusce tristique
//           libero eu mi volutpat, sit amet bibendum arcu facilisis. Pellentesque
//           habitant morbi tristique senectus et netus et malesuada fames ac
//           turpis egestas. Etiam efficitur purus id cursus rhoncus. Aliquam a dui
//           et libero posuere posuere vel nec nulla. In ac purus nec lectus
//           vulputate congue. Sed hendrerit tortor in odio dictum venenatis. Nam
//           sit amet tellus sit amet dolor vulputate finibus sed a libero.
//           Phasellus at malesuada nulla. Sed tincidunt eros eu tortor cursus, nec
//           bibendum neque mattis. Duis dapibus viverra tellus vel vehicula.
//           Aliquam nec elit eu odio consectetur varius id eu elit. Sed euismod,
//           dolor vel vulputate sollicitudin, massa odio cursus odio, in congue
//           arcu purus sed urna. Integer non bibendum ligula. Maecenas vel libero
//           vel ipsum blandit dapibus nec et velit. Morbi suscipit dui vitae odio
//           lacinia, in congue metus luctus. Sed ac urna in metus tincidunt
//           volutpat. Integer pharetra tortor nec leo ultrices, sit amet placerat
//           lorem elementum. Vivamus sagittis justo id odio ullamcorper, id
//           aliquam turpis cursus. Fusce in scelerisque velit. Maecenas volutpat
//           lectus eget justo eleifend, non fermentum dui mattis. Sed varius
//           tortor sit amet lorem hendrerit congue. In non semper justo. Nullam ac
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default About;



import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow max-w-screen-lg mx-auto pt-10 mb-4 ">
        <h1 className="text-2xl font-medium">about us</h1>
        <div className="pt-2 h-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar,
          massa vel euismod faucibus, metus neque ultrices justo, vel tristique
          lorem libero nec nisi. Nullam at risus id odio vehicula commodo. In
          dictum, orci sit amet fringilla facilisis, ligula erat dictum nisi, ac
          malesuada sapien nunc nec ex. Integer euismod purus id felis
          hendrerit, eget bibendum risus hendrerit. Aenean nec libero nec neque
          facilisis euismod. Nunc ultricies quam eget risus tincidunt volutpat.
          Nulla facilisi. Cras auctor auctor erat ac rhoncus. Fusce tristique
          libero eu mi volutpat, sit amet bibendum arcu facilisis. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Etiam efficitur purus id cursus rhoncus. Aliquam a dui
          et libero posuere posuere vel nec nulla. In ac purus nec lectus
          vulputate congue. Sed hendrerit tortor in odio dictum venenatis. Nam
          sit amet tellus sit amet dolor vulputate finibus sed a libero.
          Phasellus at malesuada nulla. Sed tincidunt eros eu tortor cursus, nec
          bibendum neque mattis. Duis dapibus viverra tellus vel vehicula.
          Aliquam nec elit eu odio consectetur varius id eu elit. Sed euismod,
          dolor vel vulputate sollicitudin, massa odio cursus odio, in congue
          arcu purus sed urna. Integer non bibendum ligula. Maecenas vel libero
          vel ipsum blandit dapibus nec et velit. Morbi suscipit dui vitae odio
          lacinia, in congue metus luctus. Sed ac urna in metus tincidunt
          volutpat. Integer pharetra tortor nec leo ultrices, sit amet placerat
          lorem elementum. Vivamus sagittis justo id odio ullamcorper, id
          aliquam turpis cursus. Fusce in scelerisque velit. Maecenas volutpat
          lectus eget justo eleifend, non fermentum dui mattis. Sed varius
          tortor sit amet lorem hendrerit congue. In non semper justo. Nullam ac
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
