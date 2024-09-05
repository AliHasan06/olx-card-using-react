import React from "react";

const Card = ({ title, description, price }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>{price}</p>
          <a href="#" className="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
