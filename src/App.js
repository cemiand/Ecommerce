import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting="Hola! Por ahora soy solo un parrafo!" />
    </React.Fragment>
  );
}

export default App;
