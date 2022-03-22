import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import WordDetails from "./components/WordDetails";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header data={data} setData={setData} />
      <WordDetails data={data} setData={setData} />
    </div>
  );
}

export default App;
