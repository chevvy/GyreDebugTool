import React from "react";
import { deleteKeys } from "../gameService/gameService";
import { ActionButton } from "./ActionButton";
import { ActionProps } from "./actions.type";

export const DeleteKeysButton = (props: ActionProps) => {
  return (
    <ActionButton
      onPress={deleteKeys}
      label="remove keys"
      iconName="minus-circle"
      {...props}
    />
  );
};
