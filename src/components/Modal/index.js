import "./style.css";

import { Portal } from "../Portal";

export const Modal = ({ children, isOpen, onClose }) => {
  if (typeof onClose !== "function") {
    console.warn("onClose needs to be Function");
  }
  if (!isOpen) return null;

  return (
    <Portal wrapperId="react-portal-modal-container">
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal">{children}</div>
      </div>
    </Portal>
  );
};

Modal.defaultProps = {
  isOpen: false,
};
