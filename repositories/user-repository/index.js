import { usersCollection } from "../../database/db.js";


async function findByUsername ( username ) {
    const user = await usersCollection.find({ username: username });

    return user;
}

async function create( data ) {
    return await usersCollection.insertOne( data )
}

const userRepository = {
    findByUsername,
    create
}

export default userRepository;