import React, { useEffect, useState } from "react";
import CardModel from "../components/CardModel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [homes, setHomes] = useState([]);
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();
  // const [admin, setAdmin] = useState({
  //   _id: "",
  //   username: "",
  // });

  useEffect(() => {
    axios
      .get("http://localhost:3000/homes/")
      .then((data) => setHomes(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this home?"
    );
    if (shouldDelete) {
      axios
        .delete("http://localhost:3000/homes/deleteHome/" + id)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };

  const logout = () => {
    // localStorage.clear();
    // setIsLoggedin(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="d-flex vh-80 bg-primary justify-content-center align-items-center cards-container">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">        

          <thead className="header-container">
            <tr>
              <th className="header">
                Welcome to HomeSweetHome for home administrators.
                <p className="header-text">Explore,manage, and showcase your properties with ease.{" "}</p>
              </th>
            </tr>
          </thead>

          <div className="add-disconnect-btn-container">
            <Link to="/create" className="btn btn-success ">
              Add a home +
            </Link>
            <button
                  className="btn btn-danger "
                  onClick={() => {
                    logout();
                  }}
                >
                  Disconnect
                </button>
          </div>

          <tbody>
            {
              <div className="home-cards">
                {homes.map((home, index) => (
                  <CardModel
                    key={index}
                    title={home.title}
                    image={home.image}
                    text={home.text}
                    price={home.price}
                    location={home.location}
                    description={home.description}
                    onDelete={() => handleDelete(home._id)}
                    onUpdate={`/update/${home._id}`}
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

export default Admin;
