import { logsCollection } from "../../database/db.js";

async function findLogs() {
    const logs = await logsCollection.find().toArray();
    
    return logs;
}

async function add( log ) {
    return await logsCollection.insertOne( log );
}

const logsRepository = {
    findLogs,
    add
}

export default logsRepository;
