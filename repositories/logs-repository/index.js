import { logsCollection } from "../../database/db.js";

async function findLogs() {
    const logs = await logsCollection.find().toArray();
    
    return logs;
}

const logsRepository = {
    findLogs
}

export default logsRepository;
