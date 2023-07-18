import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserCardModel from "../components/UserCardModel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import HomeModal from "../components/HomeModal"; // Use BootstrapModal
import "../home.css";
import "../modal.css"

function Homepage() {
  const navigate = useNavigate();
  const [homes, setHomes] = useState([]);
  const [selectedHome, setSelectedHome] = useState(null);
  const [showModal, setShowModal] = useState(false);



  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     axios
  //       .post('http://localhost:3001/user/verify', {
  //         token: localStorage.getItem('token'),
  //       })
  //       .then(({ data }) => {
  //         if (data._id) {
  //           console.log(data);
  //           setUser(data);
  //         } else {
  //           navigate('/');
  //         }
  //       });
  //   } else {
  //     navigate('/');
  //   }
  // }, []);

// get homes data 
  useEffect(() => {
    axios
      .get("http://localhost:3000/homes/")
      .then(({ data }) => {
        setHomes(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
//on card click update selected home and show the modal
  const handleCardClick = (home) => {
    setSelectedHome(home);
    setShowModal(true);
  };
// upon hitting close, close the modal and deselect the home
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHome(null);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleRating = (rating) => {
    // Save the rating value to your external storage (e.g., database)
    console.log("Rating saved:", rating);
  };

  return (
    <div className="d-flex vh-80 bg-primary justify-content-center align-items-center cards-container">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Book a house</th>
              <button
                  className="btn btn-danger"
                  onClick={() => {
                    logout();
                  }}
                >
                  Disconnect
                </button>
            </tr>
          </thead>
          <tbody>
            <div className="home-cards hover">
              {homes.map((home) => (
                <div key={home._id} onClick={() => handleCardClick(home)}>
                  <UserCardModel
                    title={home.title}
                    image={home.image}
                    text={home.text}
                    price={home.price}
                    location={home.location}
                    description={home.description}
                  />
                </div>
              ))}
            </div>
          </tbody>
        </table>
      </div>

      {selectedHome && (
        <HomeModal // Use BootstrapModal instead of HomeModal
          title={selectedHome.title}
          image={selectedHome.image}
          text={selectedHome.text}
          price={selectedHome.price}
          location={selectedHome.location}
          description={selectedHome.description}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
    );
  }
  
  export default Homepage;