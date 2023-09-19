import bcrypt from "bcryptjs";
import userRepository from "../../repositories/user-repository/index.js";

async function createUser({ username, password }) {
    
    await validadeUniqueUsernameOrFail(username);

    const hashedPassword = await bcrypt.hash(password, 12);

    return userRepository.create({
        username,
        password: hashedPassword,
    });
};

async function validadeUniqueUsernameOrFail( username ) {
    
    const userWithSameUsername = await userRepository.findByUsername(username);

    if(userWithSameUsername) {
        throw { message: "There is already an user with give username" };
    }
};

const userService = {
    createUser
};

export default userService;