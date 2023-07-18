import React from "react";
import { Card } from "react-bootstrap";
import "../home.css"

const UserCardModel = ({ title, text, image }) => {

  return (
    <Card style={{maxWidth: "20rem", marginBottom: "20px"}}>
      <Card.Img
        className="card-img"
        variant="top"
        src= {image}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCardModel;