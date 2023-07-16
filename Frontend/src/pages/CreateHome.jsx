import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateHome() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/homes/post", {
        title,
        text,
        image,
        price,
        location,
        description,
      })
      .then((data) => {
        console.log(data);
        navigate("/homes");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Home</h2>
          <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Home Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="text">Type</label>
            <input
              type="text"
              id="text"
              placeholder="Enter Home Type"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              placeholder="Enter Image URL"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              placeholder="Enter Price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter Home Location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter Home Description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateHome;
