import { useGlobalContext } from "../context/context";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <button onClick={closeModal} className="modal-close-btn">
          <IoMdClose />
        </button>
        <h1>This is a Modal</h1>
      </div>
    </div>
  );
};
export default Modal;
