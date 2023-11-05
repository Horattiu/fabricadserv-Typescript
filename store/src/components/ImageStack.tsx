// import { useState } from "react";
// import { BsFillArrowLeftCircleFill } from "react-icons/bs";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import "../css/imageStack.css";

// interface ImageStackProps {
//   images: string[];
// }

// function ImageStack({ images }: ImageStackProps) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNextImage = () => {
//     if (currentImageIndex < images.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     } else {
//       // If it's the last image, cycle back to the first image
//       setCurrentImageIndex(0);
//     }
//   };

//   const handlePreviousImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     } else {
//       // If it's the first image, go to the last image
//       setCurrentImageIndex(images.length - 1);
//     }
//   };

//   const currentImage = images[currentImageIndex];

//   return (
//     <div className="image-stack-container">
//       <img src={currentImage} alt="Product" className="" />
//       {/* <button className="prev-button" onClick={handlePreviousImage}> */}
//       <BsFillArrowLeftCircleFill
//         className="prev-button"
//         onClick={handlePreviousImage}
//       />
//       {/* </button> */}
//       <BsFillArrowRightCircleFill
//         className="next-button"
//         onClick={handleNextImage}
//       />
//     </div>
//   );
// }

// export default ImageStack;

import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface ImageStackProps {
  images: string[];
}

function ImageStack({ images }: ImageStackProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      // If it's the last image, cycle back to the first image
      setCurrentImageIndex(0);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      // If it's the first image, go to the last image
      setCurrentImageIndex(images.length - 1);
    }
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="bg-red-900 md:w-41 relative ">
      <img src={currentImage} alt="Product" className="w-41 h-auto" />
      <BsFillArrowLeftCircleFill
        className="absolute top-20 w-10 h-10 text-white left-2 transform scale-100 hover:scale-110 transition-transform"
        onClick={handlePreviousImage}
      />
      <BsFillArrowRightCircleFill
        className="absolute top-20 w-10 h-10 text-white  right-2 transform scale-100 hover:scale-110 transition-transform"
        onClick={handleNextImage}
      />
    </div>
  );
}

export default ImageStack;
