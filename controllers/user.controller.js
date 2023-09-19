import httpStatus from "http-status";
import userService from "../services/users-service/index.js";


export async function signUp(req, res) {
    const { username, password } = req.body;

    try {
        const user = await userService.createUser( { username, password });
        return res.status(httpStatus.CREATED).json({
            id:user.id,
            username: user.username,
        })
    } catch (err) {
        if(err.message === "There is already an user with give username") {
            return res.status(httpStatus.CONFLICT).send(err.message);
        }

        return res.status(httpStatus.BAD_REQUEST).send(err);
    }
}