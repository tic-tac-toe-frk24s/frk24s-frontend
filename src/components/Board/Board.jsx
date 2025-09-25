import React from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import styles from "./Board.module.css";

const Board = () => {
  const { players } = useGame();
  const navigate = useNavigate();

  if (!players.player1 || !players.player2) {
    
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
  <div className={styles.playerCard}>
    <span className={styles.playerPiece}>
      {players.player1.piece === "red" ? "🔴" : "🟡"}
    </span>
    <span>{players.player1.name}</span>
  </div>

  <span className={styles.vs}>vs</span>

  <div className={styles.playerCard}>
    <span className={styles.playerPiece}>
      {players.player2.piece === "red" ? "🔴" : "🟡"}
    </span>
    <span>{players.player2.name}</span>
  </div>
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
