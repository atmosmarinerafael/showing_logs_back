import httpStatus from "http-status";
import authService from "../services/auth-service/index.js"

export async function signInPost(req, res) {
    const { username, password } = req.body;

    try {
        const result = await authService.signIn({ username, password });

        return res.status(httpStatus.OK).send(result);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}