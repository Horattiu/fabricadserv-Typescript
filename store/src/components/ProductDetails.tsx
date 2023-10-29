import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../ProductsStore";
import ThreeModel from "./ThreeModel";
import AddToCartButton from "./AddToCartButton";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomModal from "./CustomModal";
import ImageStack from "./ImageStack";
// import "../css/productDetails.css";

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  moreImages: string[];
  price: number;
  size: string;
  model: string;
  texturePath: string; // Add texturePath property
}

interface RouteParams {
  productId: string;
  [key: string]: string | undefined;
}

function ProductDetails() {
  const { productId } = useParams<RouteParams>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState("normal");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

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
      <div className="flex flex-col gap-8 justify-center pt-10 text-gray-700 max-w-7xl mx-auto p-10 sm:flex-row  ">
        <ImageStack images={[product.imageUrl, ...product.moreImages]} />

        <div className="w-80 rounded-md  bg-gray-200 md:mx-0 flex flex-col justify-center iems-center mx-auto p-10 md:p-0 sm:p-0  ">
          <div className=" w-60 mx-auto ">
            <h2 className="text-3xl  font-normal ">{product.title}</h2>
            <hr className="w-14 mb-2 mt-2 border-t border-gray-400" />

            <p className="text-2xl pb-2 ">{product.price}$</p>
            <div className=" flex w-14 gap-2 ">
              <img
                className={`color ${
                  selectedColor === "oak" ? "selected" : ""
                } rounded-full w-12 h-12 `}
                src="/icons/variant.jpg"
                alt=""
                onClick={() => handleColorSelection("normal")}
              />
              <img
                className={`color ${
                  selectedColor === "red oak" ? "selected" : ""
                }  rounded-full  w-12 h-12 `}
                src="/icons/variant2.jpg"
                alt=""
                onClick={() => handleColorSelection("red oak")}
              />
              <p className="text-lg text-center p-2">color:{selectedColor}</p>
            </div>
            <div className="  flex gap-4 pt-2 items-center">
              <p className="text-sm font-normal text-gray-800 cursor-pointer bg-gray-300 px-2 pt-2 pb-2 rounded-md  transition ease-in ">
                size:{product.size}
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
            <div className=" flex  items-center py-2">
              <label className="text-xl">quantity:</label>
              <button
                className="ml-2 bg-gray-300 pt-0.2 pl-3 pb-1 pr-3  rounded hover:bg-red-400 transition ease-in"
                onClick={decrementQuantity}
              >
                -
              </button>
              <div className=" p-2">
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
      <div className=" ">
        <div className="md:w-7/12 mx-auto pl-6 pr-6  object-cover mb-6">
          <ThreeModel
            modelPath={product.model}
            scale={5}
            texturePath={product.texturePath}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
