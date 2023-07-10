// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router";
// import CardModel from "../components/CardModel";
// export default function Home() {
//   //var params = useParams();
//   //var [home, setHome] = useState({});
//   const [title, settitle] = useState("");
//   const [homeList, setHomeList] = useState([]);
//   const [image, setimage] = useState("");
//   const [text, settext] = useState("");

//   //THE USER CAN ADD A HOME
//   function addHome() {
//     if (!text || !image || !title) {
//       alert("Please fill all the fields");
//     } else {
//       axios
//         .post("http://localhost:3000/homes/post", {
//           title: title,
//           text: text,
//           image: image,
//         })
//         .then(({ data }) => {
//           setHomeList((prevHomeList) => [...prevHomeList, data]);
//           settitle("");

//           settext("");

//           setimage("");
//         });
//     }
//   }
//   // THE USER CAN UPDATE(PUT) A HOME

//   //THE USER CAN DELETE A HOME

//   //THE USER CAN GET ALL THE HOMES
//   function Homes() {
//     axios.get("http://localhost:3000/homes/").then(({ data }) => {
//       console.log("this is the home", data);
//       setHomeList(data);
//       settitle(data.title);
//       settext(data.text);
//       setimage(data.image);
      
//     });
//   }

//   useEffect(() => {
//     Homes();
//   }, []);

//   function updateHome(){
//    const{id} = useParams()
//    const [title, settitle] = useState("");
//    const [image, setimage] = useState("");
//    const [text, settext] = useState("");

//    axios.put(`http://localhost:3000/homes/ ${id}`)
//    .then(({ data }) => {
//     console.log("this is the home", data);
//     setHomeList(data);
//     settitle(data.title);
//     settext(data.text);
//     setimage(data.image);
//   });

//   return (
//     <div className="HomePage">
//       <div className="pagename">
//         <h1>Home Sweet Home</h1>
//       </div>
//       <div className="HomeContainer">
//         <input
//           onChange={(e) => {
//             settitle(e.target.value);
//           }}
//           value={title}
//           placeholder="Title"
//         />
//         <input
//           onChange={(e) => {
//             setimage(e.target.value);
//           }}
//           value={image}
//           placeholder="Image URL"
//         />
//         <input
//           onChange={(e) => {
//             settext(e.target.value);
//           }}
//           value={text}
//           placeholder="Text"
//         />
//         <button onClick={addHome}>Add a home</button>
//         <button onClick={updateHome}>Update</button>
//         <div className="home-cards">
//           {homeList.map((card, index) => (
//             <CardModel
//               key={index}
//               title={card.title}
//               imageSrc={card.imageSrc}
//               text={card.text}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// }


import React, { useEffect, useState } from "react";
// import CardModel from "../components/CardModel"
// import UpdateHome from "./UpdateHome";
//  import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Card, Navbar, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import "./home.css";

import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [homes, setHomes] = useState([]);

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
        window.location.reload()
      })
      .catch((err) => console.log(err));
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
              <th>title</th>
              <th>home</th>
              <th>image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {homes.map((home) => {
              return (
                <tr>
                  <td>{home.title}</td>
                  <td>{home.text}</td>
                  <td>{home.image}</td>
                  <td>
                    <Link
                      to={`/update/${home._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(home._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

{/* <div className="home-cards">
          {homes.map((home, index) => (
            <CardModel
              key={index}
              title={home.title}
              image={home.imageSrc}
              text={home.text}
              onDelete={() => handleDelete(home._id)}
              onUpdate={() => UpdateHome(home._id)}
            />
          ))}
        </div> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;

