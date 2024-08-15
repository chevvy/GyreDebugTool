import { configService } from "../../config/local";
import { GameStateData, GameStateRequestData } from "./gameService.type";

export function killPlayerRequest(): Promise<void> {
  return fetch(configService.killCharacterUrl).then(() =>
    console.log("player killed")
  );
}

export function toggleMusicRequest(): Promise<void> {
  return fetch(configService.toggleMusicUrl, { method: "post" }).then(() =>
    console.log("music toggled")
  );
}

export async function GameStateRequest(): Promise<GameStateData> {
  return fetch(configService.gameStateUrl)
    .then((res: Response) => res.json())
    .then((gameState: GameStateRequestData) => gameState)
    .catch(() => null);
}

export function addKeys(): Promise<void> {
  return fetch(configService.keysUrl, { method: "post" }).then(() =>
    console.log("added keys")
  );
}

export function deleteKeys(): Promise<void> {
  return fetch(configService.keysUrl, { method: "delete" }).then(() =>
    console.log("deleted keys")
  );
}
