import React from "react";
import { Card, Button } from "react-bootstrap";

const CardModel = ({ title, text, image, onDelete, onUpdate }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png"
        }
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>

        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
        <Button variant="primary" onClick={onUpdate}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardModel;
