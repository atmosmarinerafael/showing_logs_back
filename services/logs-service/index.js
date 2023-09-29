import logsRepository from "../../repositories/logs-repository/index.js";


async function getLogs() {
    
    const logs = await logsRepository.findLogs();
    
    return logs;
}

async function getLogsByServer(server) {
    
    const logsByServer = await logsRepository.findLogsByServer(server);

    return logsByServer;
}

async function getLogsByServerAndTask(server, task) {

    const logsByServerAndTask = await logsRepository.findLogsByServerAndTask(server, task);

    return logsByServerAndTask;
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
    getLogsByServer,
    getLogsByServerAndTask,
    addLog
}

export default logsService;