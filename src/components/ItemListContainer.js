import React from "react";
import "../assets/ItemListContainer.css";
import ItemCountContainer from "../containers/ItemCountContainer";

export default function ItemListContainer({ greeting }) {
  return (
    <div className="centerContent">
      <p>{greeting}</p>
      <ItemCountContainer />
    </div>
  );
}
