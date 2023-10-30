import { useState, useContext, useEffect, useRef } from "react";
import "../css/navbar.css";
import CartProduct from "./CartProduct";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";

// Define a type for the CartItem
interface CartItem {
  id: string;
  quantity: number;
  selectedColor?: string;
}

function NavbarComponent() {
  const contactRef = useRef(null);
  const catalogueRef = useRef(null);
  const [mobile, setMobile] = useState(false);
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add type annotations for the checkout function
  const checkout = async () => {
    await fetch("https://backend-fabricad.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  // Add type annotation for the handleEsc function
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        handleClose();
      }
    };

    if (show) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [show]);

  const scrollToContact = () => {
    if (contactRef.current) {
      (contactRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
      setMobile(false);
    } else {
      window.location.href = "/#contact";
    }
  };

  // Define the scrollToContactOnLoad function
  const scrollToContactOnLoad = () => {
    if (window.location.hash === "#contact") {
      scrollToContact();
    }
  };

  useEffect(scrollToContactOnLoad, []);

  // Define the scrollToCatalogue function
  const scrollToCatalogue = () => {
    if (catalogueRef.current) {
      (catalogueRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
      setMobile(false);
    } else {
      window.location.href = "/#catalogue";
    }
  };

  // Define the scrollToCatalogueOnLoad function
  const scrollToCatalogueOnLoad = () => {
    if (window.location.hash === "#catalogue") {
      scrollToCatalogue();
    }
  };

  useEffect(scrollToCatalogueOnLoad, []);

  return (
    <>
      <nav className="navbar text-sm ">
        <Link to="/" className="nav-logo">
          fabricad
        </Link>
        <ul className={mobile ? "nav-links-mobile" : "navbar-container"}>
          <li className="contact">
            <a href="#contact" onClick={scrollToContact}>
              CONTACT
            </a>
          </li>

          <li className="catalogue">
            <a href="#catalogue" onClick={scrollToCatalogue}>
              PRODUCTS
            </a>
          </li>
          <li className="about" onClick={() => setMobile(false)}>
            <Link to="/about" className="work">
              ABOUT
            </Link>
          </li>
          <div
            className="navbar-button flex text-gray-800 text-sm items-center gap-1 rounded-sm bg-gray-300 "
            onClick={handleShow}
          >
            <LuShoppingCart className="cart-icon" /> ({productsCount}) cart
          </div>
        </ul>
        {mobile ? (
          <button className="menu-close" onClick={() => setMobile(!mobile)}>
            &times;
          </button>
        ) : (
          <div className="menu-icon" onClick={() => setMobile(!mobile)}>
            <HiMenu className="menu" />
          </div>
        )}
      </nav>

      {show && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Shopping Cart</div>
              <div className="modal-close" onClick={handleClose}>
                &#x2715;
              </div>
            </div>
            <div className="modal-body">
              {productsCount > 0 ? (
                <>
                  {cart.items.map((currentProduct: CartItem, idx) => (
                    <CartProduct
                      key={idx}
                      id={currentProduct.id}
                      quantity={currentProduct.quantity}
                      selectedColor={
                        currentProduct.selectedColor || "defaultColor"
                      } // Provide a default value
                    ></CartProduct>
                  ))}
                  <h1 className="total">
                    Total: {cart.getTotalCost().toFixed(2)}
                  </h1>
                  <button className="modal-button" onClick={checkout}>
                    Checkout
                  </button>
                </>
              ) : (
                <div>
                  <h1>cart empty </h1>
                  <img
                    className="empty mx-auto"
                    src="/Gallery/empty.png"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarComponent;
