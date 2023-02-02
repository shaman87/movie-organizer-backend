import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDb } from "./config/database";

import { authenticationRouter } from "./routers";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (req, res) => res.status(200).send("OK!"))
  .use("/auth", authenticationRouter);

dotenv.config();

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export default app;
