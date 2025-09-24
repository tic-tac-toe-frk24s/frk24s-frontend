import React, { useState } from "react";
import Header from "../components/Header";
import Regler from "../components/Regler";
import StartButton from "../components/StartButton";
import ChoosePiece from "../components/ChoosePiece";

const HomePage = () => {
  const [piece, setPiece] = useState(null);

  const handleStart = () => {
    if (!piece) {
      alert("Choose your piece first!");
    } else {
      alert(`Game started with ${piece}`);
    }
  };

  return (
    <div>
      <Header />
      <Regler />
      <ChoosePiece onSelect={setPiece} />
      <StartButton onStart={handleStart} />
    </div>
  );
};

export default HomePage;




