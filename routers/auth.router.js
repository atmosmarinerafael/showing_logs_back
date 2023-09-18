import { Router } from "express";
import { signInPost } from "../controllers/auth.router";

const authRouter = Router();

authRouter.post("/login", signInPost);

export default authRouter;