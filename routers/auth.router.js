import { Router } from "express";
import { signInPost } from "../controllers/auth.controller.js";
import { validateBodySignIn } from "../middlewares/validation.middleware.js";

const authRouter = Router();

authRouter.post("/sign-in", validateBodySignIn,  signInPost);

export default authRouter;