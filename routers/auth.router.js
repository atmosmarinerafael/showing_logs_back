import { Router } from "express";
import { signInPost } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/login", signInPost);

export default authRouter;