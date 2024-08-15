import { useState, useEffect } from "react";
import { GameStateData, GameStateRequest } from "../game-service/game-service";

export const useGameState = (): GameStateData => {
  // TODO don't use game state data type
  const [gameState, setGameState] = useState<GameStateData>(null);
  // TODO extract to custom hook
  useEffect(() => {
    const toggle = setInterval(() => {
      GameStateRequest().then((state) => setGameState(state));
    }, 1000);

    return () => clearInterval(toggle);
  }, []);

  return gameState;
};
