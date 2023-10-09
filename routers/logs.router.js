import { Router } from "express";
import { addLog, findDates, findLogs } from "../controllers/logs.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";


const logsRouter = Router();

logsRouter.get("/logs/:server?/:task?/:date?", authenticateToken, findLogs);
logsRouter.get("/dates", authenticateToken, findDates);
// logsRouter.get("/logs/:server", authenticateToken, findLogsByServer);
// logsRouter.get("/logs/:server/:task", authenticateToken, findLogsByServerAndTask)
logsRouter.post("/logs", authenticateToken, addLog);

export default logsRouter;