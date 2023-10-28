import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Catalogue from "./Catalogue";
import Services from "./Services";

function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Catalogue />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
