import { Router } from "express";
import { findLogs } from "../controllers/logs.controllers.js";


const router = Router();

router.get("/logs", findLogs);

export default router;