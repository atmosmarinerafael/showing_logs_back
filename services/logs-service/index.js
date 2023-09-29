import logsRepository from "../../repositories/logs-repository/index.js";


async function getLogs() {
    
    const logs = await logsRepository.findLogs();
    
    return logs;
}

async function addLog( log ) {

    const date = new Date();

    const newLog = {
        ...log,
        createdAt: [date.toLocaleDateString(), date.toLocaleTimeString()]
    }

    return logsRepository.add( newLog );
}

const logsService = {
    getLogs,
    addLog
}

export default logsService;