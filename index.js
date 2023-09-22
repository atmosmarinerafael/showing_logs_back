import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import logsRouter from "./routers/logs.router.js"
import authRouter from "./routers/auth.router.js";
import usersRouter from "./routers/users.router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(logsRouter);
app.use(authRouter);
app.use(usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));