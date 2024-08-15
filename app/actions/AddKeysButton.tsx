import React from "react";
import { addKeys } from "../gameService/gameService";
import { ActionButton } from "./ActionButton";

export const AddKeysButton = () => {
  return <ActionButton onPress={addKeys} label="Add keys" iconName="key" />;
};
