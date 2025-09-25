import React from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import styles from "./Board.module.css";

const Board = () => {
  const { players } = useGame();
  const navigate = useNavigate();

  if (!players.player1 || !players.player2) {
    // If players aren’t set, go back to setup
    navigate("/setup");
    return null;
  }

  const size = 5;
  const cells = Array.from({ length: size * size });

  return (
    <div className={styles.boardContainer}>
       <button onClick={() => navigate("/setup")} className={styles.backBtn}>
        ⬅ Tillbaka
      </button>
      <div className={styles.header}>
        <h2>
          {players.player1.name} ({players.player1.piece === "red" ? "🔴" : "🟡"}) 
          {" vs "}
          {players.player2.name} ({players.player2.piece === "red" ? "🔴" : "🟡"})
        </h2>
      </div>

      <div className={styles.board}>
        {cells.map((_, idx) => (
          <div key={idx} className={styles.cell}></div>
        ))}
      </div>
    </div>
  );
};

export default Board;
