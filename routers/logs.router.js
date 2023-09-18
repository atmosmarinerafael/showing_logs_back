import { Router } from "express";
import { addLog, findLogs } from "../controllers/logs.controller.js";


const logsRouter = Router();

logsRouter.get("/logs", findLogs);
logsRouter.post("/logs", addLog);

export default logsRouter;