import { Modal } from "../Modal";
import React from "react";

export const CatModal = ({ isOpen, onClose, cat }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <img src={cat.img} alt={cat.breed} />
    </Modal>
  );
};
