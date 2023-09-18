import { usersCollection } from "../../database/db.js";


async function findByUsername ( username ) {

    const user = await usersCollection.findOne({ username });

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