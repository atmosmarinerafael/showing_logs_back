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

async function getLogsByServerTaskAndDate(server, task, date) {

    if(date) {
        const splitDate = date.split("-");

        const formatedDate = `${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`

        const logsByServerTaskAndDate = await logsRepository.findLogsByServerTaskAndDate(server, task, formatedDate);

        return logsByServerTaskAndDate;

    }
    
    const todayDate = new Date();
    const formatedDate = todayDate.toLocaleDateString();

    const logsByServerTaskAndDate = await logsRepository.findLogsByServerTaskAndDate(server, task, formatedDate);

    return logsByServerTaskAndDate;
}

async function getDates() {

    const dates = await logsRepository.findDates();

    return dates;
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
    getLogsByServerTaskAndDate,
    getDates,
    addLog
}

export default logsService;