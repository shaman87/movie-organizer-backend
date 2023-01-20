import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

server.get("/health", (req, res) => res.status(200).send("OK!"));

server.listen(4000, () => console.log("Listening on port 4000"));