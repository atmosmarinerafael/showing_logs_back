import { Router } from "express";
import { addLog, findLogs } from "../controllers/logs.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";


const logsRouter = Router();

logsRouter.get("/logs", authenticateToken, findLogs);
logsRouter.post("/logs", authenticateToken, addLog);

export default logsRouter;