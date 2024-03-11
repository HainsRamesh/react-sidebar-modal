import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { isModal, closeModal } = useGlobalContext();
  return (
    <div className={isModal ? "overlay show-modal" : "overlay"}>
      <div className="modal-container">
        <h3>Nothing's there, please close</h3>
        <button className="modal-btn" onClick={closeModal}>
          <IoClose />
        </button>
      </div>
    </div>
  );
};
export default Modal;
