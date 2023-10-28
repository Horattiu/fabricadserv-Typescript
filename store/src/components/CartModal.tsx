import { useEffect } from "react";
import "../css/cartModal.css";
import { BsCheckCircle } from "react-icons/bs";

interface CartModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartModal({ showModal, setShowModal }: CartModalProps) {
  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
  }, [showModal, setShowModal]);

  return (
    <div className={`cart-modal ${showModal ? "show" : ""}`}>
      added to cart <BsCheckCircle className="check-icon" />
      <div className="triangle"></div>
    </div>
  );
}

export default CartModal;
