import { configService } from "../../config/local";

export function killPlayerRequest(): Promise<void> {
  return fetch(configService.killCharacterUrl).then((x) =>
    console.log("player killed")
  );
}
