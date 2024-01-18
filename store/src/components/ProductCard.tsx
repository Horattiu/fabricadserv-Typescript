import { Link } from "react-router-dom";
import "../css/productCard.css";
import { Product } from "../Types";

interface ProductCardProps {
  product: Product;
  color?: string;
}

function ProductCard(props: ProductCardProps) {
  const { product } = props;

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
     
        <Link to={`/product-details/${product.id}`}>
          <button className="details-button">Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
