import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import userRepository from "../../repositories/user-repository/index.js";

async function signIn( params ) {
    const { username, password } = params;

    const user = await userRepository.findByUsername(username);
    
    if(!user) {
        throw { message: "USER NOT FOUND!" }
    }

    const userId = user._id

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw { message: "USERNAME OR PASSWORD INCORRECT" };

    const token = jwt.sign({userId}, `${process.env.JWT_SECRET}`);

    console.log(token);

    return {
        userId,
        username: user.username,
        token,
    };
}

const authService = {
    signIn
}

export default authService;