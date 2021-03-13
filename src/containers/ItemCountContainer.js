import React, { useState } from "react";
import ItemCount from "../components/ItemCount";
import "../assets/ItemCountContainer.css";

export default function ItemCountContainer() {
  const [stock, setStock] = useState(5);
  const [quantity, setQuantity] = useState(1);

  const onAdd = (e, quantity) => {
    e.preventDefault();
    setStock(stock - quantity);
  };

  return (
    <ItemCount
      onAdd={onAdd}
      initial={1}
      stock={stock}
      quantity={quantity}
      setQuantity={setQuantity}
    />
  );
}
