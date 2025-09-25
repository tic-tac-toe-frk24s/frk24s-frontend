import React from "react";
import Board from "./Board";
import { GameProvider } from "../../context/GameContext";
import { BrowserRouter } from "react-router-dom";


export default {
  title: "Components/Board",
  component: Board,
};

export const Default = () => (
  <BrowserRouter>
    <GameProvider>
      <Board />
    </GameProvider>
  </BrowserRouter>
);