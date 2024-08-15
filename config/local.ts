const config: Config = {
  host: "http://192.168.2.18",
  port: 8060,
};

const getBaseUrl = () => `${config.host}:${config.port}`;
export const configService = {
  killCharacterUrl: getBaseUrl(),
  toggleMusicUrl: `${getBaseUrl()}/music`,
  gameStateUrl: `${getBaseUrl()}/state`,
  addKeysUrl: `${getBaseUrl()}/keys`,
};
