import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../ProductsStore";
import ThreeModel from "./ThreeModel";
import AddToCartButton from "./AddToCartButton";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomModal from "./CustomModal";
import ImageStack from "./ImageStack";
import "../css/productDetails.css";
import "../css/modelBox.css";

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  moreImages: string[];
  price: number;
  size: string;
  model: string;
  texturePath: string;
}

interface RouteParams {
  productId: string;
  [key: string]: string | undefined;
}

function ProductDetails() {
  const { productId } = useParams<RouteParams>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("normal");

  useEffect(() => {
    const fetchedProduct = getProductData(productId ?? "");
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    }
  }, [productId]);

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
  };

  const openCustomModal = () => {
    setIsCustomModalOpen(true);
  };

  const closeCustomModal = () => {
    setIsCustomModalOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (
      e.target &&
      (e.target as HTMLElement).classList.contains("custom-modal-overlay")
    ) {
      closeCustomModal();
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const incrementQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex  flex-col md:flex-row md:ml-20 md:mr-20 md:p-10 gap-8 justify-center  text-gray-700 p-6   sm:flex-row">
        <ImageStack images={[product.imageUrl, ...product.moreImages]} />

        <div className="rounded-md md:w-96 md:mx-0 flex flex-col justify-center items-center bg-gray-100 ">
          <div className="mx-auto p-12 ">
            <h2 className="text-3xl font-normal ">{product.title}</h2>
            <hr className="w-14 mb-2 mt-2 border-t border-gray-400" />

            <p className="text-2xl pb-2 ">{product.price}$</p>
            <div className="flex w-30 gap-2 bg-re-d ">
              <img
                className={`w-10 h-10 rounded-full hover:border ${
                  selectedColor === "normal"
                } `}
                src="/icons/variant.jpg"
                alt=""
                onClick={() => handleColorSelection("normal")}
              />
              <img
                className={` w-10 h-10 rounded-full hover:border ${
                  selectedColor === "red finish"
                }  `}
                src="/icons/variant2.jpg"
                alt=""
                onClick={() => handleColorSelection("red finish")}
              />
              <p className="text-lg text-center  w-40  p-2">
                color: {selectedColor}
              </p>
            </div>
            <div className="flex gap-2 pt-2 items-center w-full  ">
              <p className="text-sm font-normal text-gray-800 cursor-pointer bg-gray-300 pl-2 pr-2 pt-2 pb-2 rounded-md   ">
                size: {product.size}
              </p>
              <p
                className="text-sm font-normal text-gray-800 cursor-pointer bg-gray-300 px-10 pt-2 pb-2 rounded-md hover:bg-red-400 transition ease-in "
                onClick={openCustomModal}
              >
                custom
              </p>
            </div>
            {isCustomModalOpen && (
              <div
                className="custom-modal-overlay"
                onClick={handleOverlayClick}
              >
                <CustomModal onClose={closeCustomModal} />
              </div>
            )}
            <div className="flex  items-center py-2">
              <label className="text-xl">quantity:</label>
              <button
                className="ml-2 bg-gray-300 pt-0.2 pl-3 pb-1 pr-3 rounded hover:bg-red-400 transition ease-in"
                onClick={decrementQuantity}
              >
                -
              </button>
              <div className="p-2">
                <span>{selectedQuantity}</span>
              </div>
              <button
                className="bg-gray-300 pt-0.2 pl-3 pb-1 pr-3 rounded hover:bg-red-400 transition ease-in"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <AddToCartButton
              productId={product.id}
              selectedColor={selectedColor}
              selectedQuantity={selectedQuantity}
            />
          </div>
        </div>
      </div>

      <div className="  flex flex-col md:flex-row md:gap-8 gap-4 md:ml-20 md:mr-20  justify-center md:pt-10 md:pb-10  p-6 ">
        <ThreeModel
          modelPath={product.model}
          scale={6}
          texturePath={product.texturePath}
        />
        <div className="md:w-96 w-80   justify-center rounded-md ">
          <h1 className="text-xl flex justify-center md:p-10 p-4">
            rotate and play with the model
          </h1>
          <img src="/./img/view.png" alt="" className="w-20 mx-auto  " />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
