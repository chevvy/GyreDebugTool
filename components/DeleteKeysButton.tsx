import React from "react";
import { deleteKeys } from "../app/game-service/game-service";
import { ActionButton } from "./ActionButton";

export const DeleteKeysButton = () => {
  return (
    <ActionButton
      onPress={deleteKeys}
      label="remove keys"
      iconName="minus-circle"
    />
  );
};
