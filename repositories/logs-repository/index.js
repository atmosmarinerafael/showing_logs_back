import { logsCollection } from "../../database/db.js";

async function findLogs() {
    const logs = await logsCollection.find().toArray();
    
    return logs;
}

async function findLogsByServer(server) {
    const logsByServer = await logsCollection.find({ server: server }).toArray();

    return logsByServer;
}

async function findLogsByServerAndTask(server, task) {
    const logsByServerAndTask = await logsCollection.find({ server: server, task:task }).toArray();

    return logsByServerAndTask;
}

async function add( log ) {
    return await logsCollection.insertOne( log );
}


const logsRepository = {
    findLogs,
    findLogsByServer,
    findLogsByServerAndTask,
    add
}

export default logsRepository;
