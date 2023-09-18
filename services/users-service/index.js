import bcrypt from "bcryptjs";
import userRepository from "../../repositories/user-repository/index.js";

async function createUser({ usename, password }) {
    await validadeUniqueUsernameOrFail(usename);

    const hashedPassword = await bcrypt.hash(password, 12);

    return userRepository.create({
        usename,
        password: hashedPassword,
    });
};

async function validadeUniqueUsernameOrFail( usename ) {
    const userWithSameUsername = await userRepository.findByUsername(usename);
    if(userWithSameUsername) {
        throw { message: "There is already an use with give username" };
    }
};

const userService = {
    createUser
};

export default userService;