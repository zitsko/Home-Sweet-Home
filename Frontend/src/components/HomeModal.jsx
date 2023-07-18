import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../modal.css";
import UserCardModel from "./UserCardModel";
import StarRating from "./StarRating";

const HomeModal = ({ title, text, image, price, location, description, showModal, handleCloseModal }) => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = () => {
    // You can handle the review submission here, e.g., send it to a server or store it in a state variable.
    console.log("Review submitted:", review);

    // Add the new review to the reviews state array
    setReviews((prevReviews) => [...prevReviews, review]);

    setReview(""); // Clear the review input after submission if needed.
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <UserCardModel title={title} image={image} text={text} price={price} location={location} description={description} />
        </div>
        <div className="rating-review-container">
          <div>
            <h3>Enjoyed your stay?</h3>
            <p style={{ fontWeight: "bold" }}>Leave a rating!</p>
            <StarRating />
          </div>
          <div className="review-section">
            <h3>Leave a review:</h3>
            <textarea
              className="review-input"
              rows="4"
              placeholder="Type your review here..."
              value={review}
              onChange={handleReviewChange}
            />
            <button className="submit-button" onClick={handleSubmitReview}>
              Submit Review
            </button>
          </div>
          <div className="reviews-section">
            <h3>Reviews:</h3>
            {reviews.map((review, index) => (
              <div key={index} className="review-bubble">
                <p>{review}</p>
              </div>
            ))}
            {reviews.length === 0 && <p>No reviews yet.</p>}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HomeModal;