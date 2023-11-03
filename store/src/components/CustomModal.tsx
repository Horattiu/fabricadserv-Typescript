import "../css/customModal.css";
import { RiEyeCloseLine } from "react-icons/ri";

interface CustomModalProps {
  onClose: () => void;
}

function CustomModal({ onClose }: CustomModalProps) {
  return (
    <div className="custom-modal">
      <span className="close-button" onClick={onClose}>
        <RiEyeCloseLine className="hover:text-red-500 transition ease-in  " />
      </span>
      <p>For custom requirements, contact us at fabricad@gmail.com </p>
    </div>
  );
}

export default CustomModal;
