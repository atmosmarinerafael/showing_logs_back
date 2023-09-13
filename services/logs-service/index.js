import logsRepository from "../../repositories/logs-repository/index.js";


async function getLogs() {
    
    const logs = await logsRepository.findLogs();
    
    return logs;
}


const logsService = {
    getLogs
}

export default logsService;