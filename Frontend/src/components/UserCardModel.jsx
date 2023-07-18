import React from "react";
import { Card } from "react-bootstrap";
import "../home.css"

const UserCardModel = ({ title, text, image, price, location, description }) => {

  return (
    <Card style={{maxWidth: "20rem", marginBottom: "20px"}}>
      <Card.Img
        className="card-img"
        variant="top"
        src= {image}
      />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">{text}</Card.Text>
        <Card.Text className="card-text">Price: {price}</Card.Text>
        <Card.Text className="card-text">Location: {location}</Card.Text>
        <Card.Text className="card-text">Description: {description}</Card.Text> 
      </Card.Body>
    </Card>
  );
};

export default UserCardModel;