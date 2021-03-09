import React from "react";
import "../assets/ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  return (
    <div className="centerContent">
      <p>{greeting}</p>
    </div>
  );
}
