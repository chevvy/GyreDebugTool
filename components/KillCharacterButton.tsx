import React from "react";
import { Button } from "react-native";
import { ActionButton } from "./ActionButton";

const emitKillCharacter = () =>
  fetch("http://192.168.2.18:8080").then((x) => console.log("player killed"));

export const KillPlayerButton = () => {
  return <ActionButton onPress={emitKillCharacter} label="Kill Character" />;
};
