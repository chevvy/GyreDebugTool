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
