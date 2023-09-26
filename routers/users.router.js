import { Router } from "express";
import { validateBody } from "../middlewares/validation.middleware.js";
import { signUp } from "../controllers/user.controller.js"

const usersRouter = Router();

usersRouter.post("/", validateBody, signUp);
usersRouter.get("/", (req, res) => res.status(200).send("testando").json());

export default usersRouter;