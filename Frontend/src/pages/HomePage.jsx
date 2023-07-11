import React, { useEffect, useState } from "react";
import CardModel from "../components/CardModel";
import UpdateHome from "./UpdateHome";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [homes, setHomes] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/homes/")
      .then((data) => setHomes(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/homes/deleteHome/" + id)
      .then((data) => {
        console.log(data);
        window.location.reload();
        window.alert("Successfully deleted the item.");
      })
      .catch((err) => console.log(err));
  };
  const logout = () => {
    localStorage.clear();
    setIsLoggedin(false);
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
          <thead>
            <tr>
              <th>Publish a house</th>
            </tr>
          </thead>
          <tbody>
            {
              <div className="home-cards">
                {homes.map((home, index) => (
                  <CardModel
                    key={index}
                    title={home.title}
                    image={home.image}
                    text={home.text}
                    onDelete={() => handleDelete(home._id)}
                    onUpdate={() => UpdateHome(home._id)}
                  />
                ))}
              </div>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
