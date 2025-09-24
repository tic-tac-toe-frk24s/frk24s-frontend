import React, { useState } from "react";
import Header from "../components/Header";
import ReglerButton from "../components/ReglerButton/ReglerButton";
import StartButton from "../components/StartButton/StartButton";
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
      <ReglerButton />
      <ChoosePiece onSelect={setPiece} />
      <StartButton StartButtonText="Starta spelet" onStart={handleStart} />
    </div>
  );
};

export default HomePage;




