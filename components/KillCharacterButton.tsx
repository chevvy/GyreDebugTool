import React from "react";
import { ActionButton } from "./ActionButton";
import { killPlayerRequest } from "../app/game-service/game-service";

export const KillPlayerButton = () => {
  return <ActionButton onPress={killPlayerRequest} label="Kill Character" />;
};
