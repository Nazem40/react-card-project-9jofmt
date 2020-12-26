import React from "react";
import "./Card.css";

function Card(props) {
  const { title, text, image, key } = props.item;
  const ITEM = props.item;

  const [counter, setCounter] = React.useState(
    Number(localStorage.getItem(key) || 0)
  );

  const clickHandler = event => {
    event.target.name == "increase"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };
  localStorage.setItem(key, counter);

  return (
    <div className="card">
      {image ? <img src={image} className="card-img-top" alt="..." /> : null}

      <div className="card-body">
        {ITEM.title ? <h2 className="card-title">{ITEM.title}</h2> : null}
        <p className="card-text">{props.item.text}</p>
        <div>
          <div className="d-flex justify-content-between">
            <a
              id="increase"
              style={{
                color: "#006400",
                padding: "5px 20px",
                border: "2px solid #006400",
                borderRadius: "50px",
                cursor: "pointer"
              }}
              name="increase"
              onClick={clickHandler}
            >
              Like
            </a>

            <p
              style={{
                margin: "auto"
              }}
            >
              {counter}
            </p>

            <a
              id="decrease"
              style={{
                color: "#8b0000",
                padding: "5px 10px",
                border: "2px solid #8b0000",
                borderRadius: "50px",
                cursor: "pointer"
              }}
              name="decrease"
              onClick={clickHandler}
            >
              Dislike
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
