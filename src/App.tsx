import React from "react";
import Title from "./components/Title";
import IconButton from "./components/IconButton";

function App() {
  return (
    <div>
      <Title>Teste</Title>
      <IconButton onClick={() => alert("teste")} />
    </div>
  );
}

export default App;
