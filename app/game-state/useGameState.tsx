import { useState, useEffect } from "react";
import {
  GameStateRequestData,
  GameStateRequest,
} from "../game-service/game-service";

export const useGameState = (): GameStateRequestData => {
  // TODO don't use game state data type
  const [gameState, setGameState] = useState<GameStateRequestData>({
    isMusicPlaying: true,
    keysQuantity: 0,
  });
  // TODO extract to custom hook
  useEffect(() => {
    const toggle = setInterval(() => {
      GameStateRequest().then((state) => setGameState(state));
    }, 1000);

    return () => clearInterval(toggle);
  }, []);

  return gameState;
};
