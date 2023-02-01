import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDb } from "./config/database";

const server = express();

server.use(cors());
server.use(express.json());

dotenv.config();

server.get("/health", (req, res) => res.status(200).send("OK!"));

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(server);
}

export default server;
