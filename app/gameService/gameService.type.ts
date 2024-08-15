export interface GameStateRequestData {
  isMusicPlaying: boolean;
  keysQuantity: number;
}
export type GameStateData = GameStateRequestData | null;
