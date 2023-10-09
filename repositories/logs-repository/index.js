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

async function findLogsByServerTaskAndDate(server, task, date) {
    const logsByServerTaskAndDate = await logsCollection.find({
        server: server,
        task: task,
        createdAt: date
        }).toArray();

    return logsByServerTaskAndDate;
}

async function add( log ) {
    return await logsCollection.insertOne( log );
}


const logsRepository = {
    findLogs,
    findLogsByServer,
    findLogsByServerAndTask,
    findLogsByServerTaskAndDate,
    add
}

export default logsRepository;
