import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import userRepository from "../../repositories/user-repository/index.js";

async function signIn( params ) {
    const { username, password } = params;

    const user = userRepository.findByUsername(username);
    if(!user) {
        throw { message: "USER NOT FOUND!" }
    }

    const userId = user.idç

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw { message: "USERNAME OR PASSWORD INCORRECT" };

    const token = jwt.sign({userId}, `${process.env.JWT_SECRET}`);

    return {
        user: exclude(user, "password"),
        token,
    };
}

const authService = {
    signIn
}

export default authService;