import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CardModel from "../components/CardModel";
export default function Home() {
  //var params = useParams();
  //var [home, setHome] = useState({});
  const [title, settitle] = useState("");
  const [homeList, setHomeList] = useState([]);
  const [image, setimage] = useState("");
  const [text, settext] = useState("");

  //THE USER CAN ADD A HOME
  function addHome() {
    if (!text || !image || !title) {
      alert("Please fill all the fields");
    } else {
      axios
        .post("http://localhost:3000/homes/post", {
          title: title,
          text: text,
          image: image,
        })
        .then(({ data }) => {
          setHomeList((prevHomeList) => [...prevHomeList, data]);
          settitle("");

          settext("");

          setimage("");
        });
    }
  }
  // THE USER CAN UPDATE(PUT) A HOME

  //THE USER CAN DELETE A HOME

  //THE USER CAN GET ALL THE HOMES
  return (
    <div className="HomePage">
      <div className="pagename">
        <h1>Home Sweet Home</h1>
      </div>
      <div className="HomeContainer">
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          placeholder="Title"
        />
        <input
          onChange={(e) => {
            setimage(e.target.value);
          }}
          value={image}
          placeholder="Image URL"
        />
        <input
          onChange={(e) => {
            settext(e.target.value);
          }}
          value={text}
          placeholder="Text"
        />
        <button onClick={addHome}>Add a home</button>
        <div className="home-cards">
          {homeList.map((card, index) => (
            <CardModel
              key={index}
              title={card.title}
              imageSrc={card.imageSrc}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
