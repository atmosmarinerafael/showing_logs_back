import { Router } from "express";
import { addLog, findLogs, findLogsByServer } from "../controllers/logs.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";


const logsRouter = Router();

logsRouter.get("/logs", authenticateToken, findLogs);
logsRouter.get("/logs/:server", authenticateToken, findLogsByServer);
logsRouter.post("/logs", authenticateToken, addLog);

export default logsRouter;