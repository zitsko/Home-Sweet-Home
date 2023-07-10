import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateHome() {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/homes/post", {
        title,
        text,
        image,
      })
      .then(data => {
        console.log(data)
        navigate("/homes")
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Home</h2>
          <div className="mb-2">
            <label htmlFor="">title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Text</label>
            <input
              type="text"
              placeholder="Enter Text"
              className="form-control"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Image</label>
            <input
              type="text"
              placeholder="Enter Image"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateHome;