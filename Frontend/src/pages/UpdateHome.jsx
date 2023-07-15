import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateHome() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/homes/updateHome/${id}`, {
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

  useEffect(() => {
    axios
      .get(`http://localhost:3000/homes/getHome/${id}`)
      .then((data) => {
        console.log(data);
        const homeData = data.data;
        setTitle(homeData.title);
        setText(homeData.text);
        setImage(homeData.image);
        setPrice(homeData.price);
        setLocation(homeData.location);
        setDescription(homeData.description);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update Home</h2>
          <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              id="text"
              placeholder="Enter Text"
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
              placeholder="Enter Image"
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
              placeholder="Enter Location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter Description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateHome;
