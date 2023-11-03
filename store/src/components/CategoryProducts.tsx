import { useParams } from "react-router-dom";
import { productsArray } from "../ProductsStore";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

function CategoryProducts() {
  const { category } = useParams();

  // Filter products based on the category
  const categoryProducts = productsArray.filter(
    (product) => product.category === category
  );

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 lg:max-w-5xl rounded-sm  lg:mx-auto flex flex-col p-6 m-8  ">
        <div className="flex flex-col items-center sm:items-start">
          <div className=" ">
            <h2 className="text-3xl font-normal text-slate-700 ">{category}</h2>
            <hr className="pb-6 mt-3 border-t border-gray-300 w-full" />
          </div>
          <div className="flex items-center ">
            <div className=" flex  lg:flex-row md:flex-row gap-8 flex-col  ">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  color={""} // model={product.model}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryProducts;
