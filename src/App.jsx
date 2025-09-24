import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameSetupPage from "./pages/GameSetup";
import Board from "./components/Board/Board";
import "./App.css"; 

function App() {
  return (
      <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/setup" element={<GameSetupPage />} />
           <Route path="/board" element={<Board />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;