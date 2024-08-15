import { useState, useEffect } from "react";
import { GameStateData, GameStateRequest } from "../gameService/gameService";

export const useGameState = (): GameStateData => {
  const [gameState, setGameState] = useState<GameStateData>(null);
  useEffect(() => {
    const toggle = setInterval(() => {
      GameStateRequest().then((state) => setGameState(state));
    }, 1000);

    return () => clearInterval(toggle);
  }, []);

  return gameState;
};
