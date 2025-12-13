import "dotenv/config";

export const PORT = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;

console.log({
  PORT: PORT,
  DATABASE_URL: DATABASE_URL,
  ACCESS_TOKEN_SECRET: ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: REFRESH_TOKEN_SECRET,
  CLOUD_NAME: CLOUD_NAME,
  API_KEY: API_KEY,
  API_SECRET: API_SECRET,
});
