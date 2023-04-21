import "./style.css";

import React from "react";

export const CatCard = ({ cat }) => {
  return (
    <div className="cat-card">
      <div className="cat-card-img-wrapper">
        <img className="cat-card-img" src={cat.img} alt={cat.breed} />
      </div>
      <div className="cat-card-body">
        <h5 className="card-title">{cat.breed}</h5>
        <h6 className="card-subtitle">
          {cat.color} {cat.sex} {cat.age}
        </h6>
        <p className="cat-card-text">{cat.desc}</p>
      </div>
    </div>
  );
};
