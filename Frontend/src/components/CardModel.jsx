import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardModel = ({ title, text, image, price, location, description, onDelete, onUpdate }) => {
  const handleUpdate = () => {
    // Handle the navigation to the UpdateHome page
    onUpdate();
  };

  return (
    <Card style={{ maxWidth: "20rem", marginBottom: "20px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Location: {location}</Card.Text>
        <Card.Text>Description: {description}</Card.Text>

        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>

        <Link to={onUpdate} className="btn btn-primary edit-btn" onClick={handleUpdate}>
          Edit
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardModel;
