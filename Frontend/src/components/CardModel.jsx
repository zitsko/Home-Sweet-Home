import React from "react";
import { Card, Button } from "react-bootstrap";

const CardModel = ({ title, imageSrc, text }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default CardModel;
