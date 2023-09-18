import { Router } from "express";
import { validateBody } from "../middlewares/validation.middleware.js";

const usersRouter = Router();

usersRouter.post("/", validateBody, signUp);

export default usersRouter;