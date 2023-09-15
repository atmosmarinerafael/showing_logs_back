import logsRepository from "../../repositories/logs-repository/index.js";


async function getLogs() {
    
    const logs = await logsRepository.findLogs();
    
    return logs;
}

async function addLog( log ) {

    return logsRepository.add( log );
}

const logsService = {
    getLogs,
    addLog
}

export default logsService;