import React, { useState } from "react";
import Header from "../components/Header/Header";
import ReglerButton from "../components/ReglerButton/ReglerButton";
import StartButton from "../components/StartButton/StartButton";
import ChoosePiece from "../components/ChoosePiece";
import styles from "./HomePage.module.css";

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
      {/* Container för knappar */}
        <div className={styles.buttonContainer}>
          <StartButton onStart={handleStart} StartButtonText="Starta spelet" />
          <ReglerButton buttonLabel="Regler" />
        </div>
        
        {/* <ChoosePiece onSelect={setPiece} /> */}
    </div>
  );
};

export default HomePage;




