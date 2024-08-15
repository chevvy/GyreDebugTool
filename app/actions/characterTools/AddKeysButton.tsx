import React from "react";
import { addKeys } from "../../gameService/gameService";
import { ActionButton } from "../components/button/ActionButton";
import { ActionProps } from "../actions.type";

export const AddKeysButton = (props: ActionProps) => {
  return (
    <ActionButton
      onPress={addKeys}
      label="Add keys"
      iconName="key"
      {...props}
    />
  );
};
