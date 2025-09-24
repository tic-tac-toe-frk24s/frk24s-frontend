import React, { useState } from "react";
import InputField from "../components/InputField/InputField";
import ChoosePiece from "../components/ChoosePiece";

import styles from "./GameSetup.module.css";

const GameSetup = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  
  const [player1Piece, setPlayer1Piece] = useState(null);

  const handleStartGame = () => {
    if (!player1 || !player2) {
      alert("Båda spelarna måste ange sina namn!");
      return;
    }
    if (!player1Piece) {
      alert("Spelare 1 måste välja sin spelpjäs!");
      return;
    }

    const player2Piece = player1Piece === "white" ? "black" : "white";
    alert(
      `Spelet startas!\n${player1} (${player1Piece}) vs ${player2} (${player2Piece})`
    );
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Game Setup</h1>

      <div className={styles.inputGroup}>
        <InputField
          id="player1"
          label="Spelare 1"
          placeholder="Ange namn"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <InputField
          id="player2"
          label="Spelare 2"
          placeholder="Ange namn"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
      </div>
 <div>
        <h3>Spelare 1 väljer sin pjäs:</h3>
        <ChoosePiece value={player1Piece} onChange={setPlayer1Piece} />
      </div>
       {player1Piece && (
        <p className={styles.selectionInfo}>
          {player1} väljer: {player1Piece === "white" ? "⚪ Vit" : "⚫ Svart"} <br/>
          {player2} får: {player1Piece === "white" ? "⚫ Svart" : "⚪ Vit"}
        </p>
      )}
      <button className={styles.startBtn} onClick={handleStartGame}>
        Börja Spela
      </button>
    </div>
  );
};

export default GameSetup;
