import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateHome() {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();

  function Update(e) {
    e.preventDefault();
    axios
      .put("http://localhost:3000/homes/updateHome/" + id, {
        title,
        text,
        image,
      })
      .then((data) => {
        console.log(data);
        navigate("/homes");
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    axios
      .put("http://localhost:3000/homes/getHome/" + id)
      .then((data) => {
        console.log(data);
        setTitle(data.data.title);
        setText(data.data.text);
        setImage(data.data.image);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Home</h2>
          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Text</label>
            <input
              type="text"
              placeholder="Enter Text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Image</label>
            <input
              type="text"
              placeholder="Enter Image"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateHome;
