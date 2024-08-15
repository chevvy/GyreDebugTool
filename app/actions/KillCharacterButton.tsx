import React from "react";
import { ActionButton } from "./ActionButton";
import { killPlayerRequest } from "../gameService/gameService";

export const KillPlayerButton = () => {
  return <ActionButton onPress={killPlayerRequest} label="Kill Character" />;
};
