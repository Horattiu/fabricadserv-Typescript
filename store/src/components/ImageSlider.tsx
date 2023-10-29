import { useEffect, useState } from "react";
import "../css/imageSlider.css";
// import { Link } from "react-router-dom";

interface Image {
  image: string;
}

function ImageSlider() {
  const images: Image[] = [
    {
      image: "/Gallery/pic1.jpg",
    },
    {
      image: "/Gallery/pic2.jpg",
    },
    {
      image: "/Gallery/pic3.jpg",
    },
    {
      image: "/Gallery/pic4.jpg",
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      slideRight();
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [current]);

  const slideRight = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
    );
  };

  const scrollToNextComponent = () => {
    const nextComponent = document.getElementById("catalogue");

    if (nextComponent) {
      nextComponent.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="slider-text sm:text-4xl ml-10">
        <p>Digital fabrication</p>
        <p>PlyWood work</p>
        <p>3D Modeling</p>
        <div className="btn-icon-container">
          <button
            className="text-sm   bg-blue-700 rounded-sm px-10 pt-2 pb-2 hover:bg-blue-600 transition ease-in"
            onClick={scrollToNextComponent}
          >
            explore
          </button>
        </div>
      </div>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-card ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image.image})`,
              transform: `translateY(${
                (index - current) * 20 + scrollY / 3
              }px)`,
            }}
          >
            <div className="card-overlay"></div>
          </div>
        ))}
        <div className="carousel-pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
