import httpStatus from "http-status";

export async function signInPost(req, res) {
    const { username, password } = req.body;

    try {
        const result = authService.signIn({ username, password });

        return res.status(httpStatus.OK).send(result);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}