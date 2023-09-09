import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon , } from "@fortawesome/react-fontawesome";
import { faTrash ,faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const CardModel = ({
  title,
  text,
  image,
  price,
  location,
  description,
  onDelete,
  onUpdate,
}) => {
  const handleUpdate = () => {
    // Handle the navigation to the UpdateHome page
    onUpdate();
  };

  return (
    <Card
      style={{ maxWidth: "20rem", marginBottom: "1rem", padding: "0.75rem" }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">Type: {text}</Card.Text>
        <Card.Text className="card-text">Price: {price}</Card.Text>
        <Card.Text className="card-text">Location: {location}</Card.Text>
        <Card.Text className="card-text">Description: {description}</Card.Text>

        <Button variant="danger" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </Button>

        <Link
          to={onUpdate}
          className="btn btn-primary edit-btn"
          onClick={handleUpdate}
        >
        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardModel;
