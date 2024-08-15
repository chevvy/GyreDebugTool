import React from "react";
import { deleteKeys } from "../gameService/gameService";
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
