import { usersCollection } from "../../database/db";


async function findByUsername ( username ) {
    const user = await usersCollection.find({ username: username });

    return user;
}

const userRepository = {
    findByUsername,
}

export default userRepository;