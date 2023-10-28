import "../css/customModal.css";
import { FiMail } from "react-icons/fi";

interface CustomModalProps {
  onClose: () => void;
}

function CustomModal({ onClose }: CustomModalProps) {
  return (
    <div className="custom-modal">
      <span className="close-button" onClick={onClose}>
        X
      </span>
      <p>
        For custom requirements, contact us at fabricad@gmail.com{" "}
        <FiMail className="mail-icon" />
      </p>
    </div>
  );
}

export default CustomModal;
