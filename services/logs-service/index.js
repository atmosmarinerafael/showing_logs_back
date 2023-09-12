import { findLogs } from "../../repositories/logs-repository";

async function getLogs() {
    const logs = await logsRepository.findLogs();

    return logs;
}


const logsService = {
    getLogs
}

export default logsService;