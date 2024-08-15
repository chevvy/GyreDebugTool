import { configService } from "../../config/local";

export function killPlayerRequest(): Promise<void> {
  return fetch(configService.killCharacterUrl).then((x) =>
    console.log("player killed")
  );
}

export function toggleMusicRequest(): Promise<void> {
  return fetch(configService.toggleMusicUrl, { method: "post" }).then(() =>
    console.log("music toggled")
  );
}

interface GameStateRequestData {
  isMusicPlaying: boolean;
  keysQuantity: number;
}
export type GameStateData = GameStateRequestData | null;

export async function GameStateRequest(): Promise<GameStateData> {
  // TODO add error state and banner
  return fetch(configService.gameStateUrl)
    .then((res: Response) => res.json())
    .then((gameState: GameStateData) => gameState)
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
