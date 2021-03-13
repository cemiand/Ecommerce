import React from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ItemCount({
  onAdd,
  initial,
  stock,
  quantity,
  setQuantity,
}) {
  const classes = useStyles();

  return (
    <div className="contador">
      <form className="contadorForm">
        Stock: {stock}
        <br />
        <input
          type="number"
          defaultValue={initial}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <br />
        <Button
          disabled={stock < quantity}
          onClick={(e) => onAdd(e, quantity)}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddShoppingCartIcon />}
        >
          Agregar al carrito
        </Button>
      </form>
    </div>
  );
}
