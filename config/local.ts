const config: Config = {
  host: "http://192.168.2.18",
  port: 8080,
};

const getBaseUrl = () => `${config.host}:${config.port}`;
export const configService = {
  killCharacterUrl: getBaseUrl(),
};
