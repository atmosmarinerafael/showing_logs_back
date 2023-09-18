import httpStatus from "http-status";
import jwt from "jsonwebtoken";

export async function authenticateToken (req, res, next) {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(httpStatus.UNAUTHORIZED).json({ error: "Token not provided!" });
    }

    const [, token] = authorization.split(" ");

    try {
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)

        const { userId } = decoded;

        req.userId = userId;

        return next();
    } catch (err) {
        return res.status(httpStatus.UNAUTHORIZED).json({ error: "Invalid token" });
    }
}