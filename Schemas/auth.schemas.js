import joi from "joi";

export const signInSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
});