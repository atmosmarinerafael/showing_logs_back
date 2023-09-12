import { Router } from "express";
import { findLogs } from "../controllers/logs.controllers";


const router = Router();

router.get("/logs", findLogs);