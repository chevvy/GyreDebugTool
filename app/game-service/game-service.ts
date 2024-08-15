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

export interface GameStateRequestData {
  isMusicPlaying: boolean;
  keysQuantity: number;
}

export function GameStateRequest(): Promise<GameStateRequestData> {
  // TODO add error state and banner
  return fetch(configService.gameStateUrl)
    .then((x: Response) => x.json())
    .then((y) => {
      return y;
    });
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
