import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardModel = ({ title, text, image, onDelete, onUpdate }) => {
  const handleUpdate = () => {
    // Handle the navigation to the UpdateHome page
    onUpdate();
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src= {image}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>

        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
        
        <Link to={onUpdate} className="btn btn-primary" onClick={handleUpdate}>
          Edit
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardModel;
