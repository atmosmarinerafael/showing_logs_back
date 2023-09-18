import httpStatus from "http-status";
import { signInSchema } from "../Schemas/auth.schemas";
import { createUserSchema } from "../Schemas/user.schemas";

export function validateBody(req, res, next) {
    const user = req.body;

    const { error } = createUserSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map( d => d.message);
        return res.status(httpStatus.UNAUTHORIZED).send(errors);
    }

    next();
}

export function validateBodySignIn(req, res, next) {
    const user = req.body;

    const { error } = signInSchema.validate(user, { abortEarly: false });

    if(error) {
        const errors = error.details.map( d => d.message );
        return res.status(httpStatus.UNAUTHORIZED).send(errors);
    }

    next();
}