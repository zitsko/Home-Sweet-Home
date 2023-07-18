import Rating from "react-rating";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = () => {
  const emptyStar = <FontAwesomeIcon icon={regularStar} />;
  const fullStar = <FontAwesomeIcon icon={solidStar} />;

  const [rating, setRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false); // tracks if the user has voted this home already

//   useEffect(() => {
//     // Check if the user has voted for this house in the past (using browser storage)
//     const votedHouses = JSON.parse(localStorage.getItem("votedHouses")) || [];
//     if (votedHouses.includes(houseId)) {
//       setHasVoted(true);
//     }
//   }, [houseId]);

//   const handleRatingChange = (value) => {
//     setRating(value); // Update the local state with the selected rating
//     onSaveRating(value); // Call the prop function to save the rating externally
//   };

  return (  
    <Rating
      emptySymbol={emptyStar}
      fullSymbol={fullStar}
      start={0}
      stop={5}
      step={1}
      fractions={2} // You can set the number of fractions (2 = we have half stars , 1 = full stars only)
      readonly={false} // Set to true if you don't want to allow rating changes
    //   onChange={handleRatingChange}
    />
  );
};

export default StarRating;

