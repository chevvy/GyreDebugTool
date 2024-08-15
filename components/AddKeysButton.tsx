import React from "react";
import { addKeys } from "../app/game-service/game-service";
import { ActionButton } from "./ActionButton";

export const AddKeysButton = () => {
  return <ActionButton onPress={addKeys} label="Add keys" />;
};
