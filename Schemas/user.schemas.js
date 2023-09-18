import joi from "joi";

export const createUserSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().min(10).required(),
});