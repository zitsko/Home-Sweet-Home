import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../modal.css";
import UserCardModel from "./UserCardModel"
import StarRating from "./StarRating"

const HomeModal = ({ title, text, image, showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserCardModel title={title} image={image} text={text} />
        <StarRating />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HomeModal;