import React from "react";
import { ActionButton } from "./ActionButton";
import { killPlayerRequest } from "../gameService/gameService";
import { ActionProps } from "./actions.type";

export const KillPlayerButton = (props: ActionProps) => {
  return (
    <ActionButton
      onPress={killPlayerRequest}
      label="Kill Character"
      {...props}
    />
  );
};
