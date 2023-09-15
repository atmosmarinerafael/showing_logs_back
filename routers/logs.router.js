import { Router } from "express";
import { addLog, findLogs } from "../controllers/logs.controllers.js";


const router = Router();

router.get("/logs", findLogs);
router.post("/logs", addLog);

export default router;