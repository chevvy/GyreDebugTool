import React from "react";
import { deleteKeys } from "../../gameService/gameService";
import { ActionButton } from "../components/ActionButton";
import { ActionProps } from "../actions.type";

export const DeleteKeysButton = (props: ActionProps) => {
  return (
    <ActionButton
      onPress={deleteKeys}
      label="Remove Keys"
      iconName="minus-circle"
      {...props}
    />
  );
};
