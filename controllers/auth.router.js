import httpStatus from "http-status";

export async function signInPost(req, res) {
    const { username, password } = req.body;

    try {
        const result = authService.signIn({ username, password });

        return res.status(200).send(result);
    } catch (err) {
        return res.sendStatus(400);
    }
}