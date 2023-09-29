import { logsCollection } from "../../database/db.js";

async function findLogs() {
    const logs = await logsCollection.find().toArray();
    
    return logs;
}

async function findLogsByServer(server) {
    const logsByServer = await logsCollection.find({ server: server }).toArray();

    return logsByServer;
}

async function add( log ) {
    return await logsCollection.insertOne( log );
}


const logsRepository = {
    findLogs,
    findLogsByServer,
    add
}

export default logsRepository;
