import { useEffect, useState } from "react";
import "../css/imageSlider.css";
// import { Link } from "react-router-dom";

interface Image {
  image: string;
  title: string;
}

function ImageSlider() {
  const images: Image[] = [
    {
      image: "/Gallery/pic1.jpg",
      title: "Title 1",
    },
    {
      image: "/Gallery/pic2.jpg",
      title: "Title 2",
    },
    {
      image: "/Gallery/pic3.jpg",
      title: "Title 3",
    },
    {
      image: "/Gallery/pic4.jpg",
      title: "Title 4",
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
      <div className="slider-text">
        <p>Digital fabrication</p>
        <p>PlyWood work</p>
        <p>3D Modeling</p>
        <div className="btn-icon-container">
          <button className="explore-button" onClick={scrollToNextComponent}>
            EXPLORE
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
            <div className="card-overlay">
              <h2 className="card-title">{image.title}</h2>
            </div>
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
