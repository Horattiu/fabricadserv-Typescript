// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../CartContext";
import "../css/productCard.css";
import { Product } from "../Types";

interface ProductCardProps {
  product: Product;
  model: string; 
}

function ProductCard(props: ProductCardProps) {
  const { product, model } = props; 
//   const cart = useContext(CartContext);
  //   const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="product-card">
      <div className="card-body">
        <Link to={`/product-details/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="shop-img"
          />
        </Link>
        <h2 className="title">{product.title}</h2>
        <p className="card-price">${product.price}</p>
        {/* Display the 'model' prop */}
        <p className="model">Model: {model}</p>
        {/* <p className="card-size">size: {product.size}</p> */}

        {/* <AddToCartButton productId={product.id} /> */}
        <Link to={`/product-details/${product.id}`}>
          <button className="details-button">Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
