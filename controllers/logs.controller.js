import httpStatus from "http-status";
import logsService from "../services/logs-service/index.js";

export async function findLogs(req, res) {
    const server = req.params.server;
    const task = req.params.task;
    const date = req.params.date;
    
    try {
        if(server && task) {
            const logs = await logsService.getLogsByServerTaskAndDate(server, task, date);
            
            return res.status(httpStatus.OK).send(logs);
        }

        // const logs = await logsService.getLogs();

        // return res.status(httpStatus.OK).send(logs);
    } catch {
        
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

// export async function findLogsByServer(req, res) {
//     const server = req.params.server;

//     try {
//         const logsByServer = await logsService.getLogsByServer(server);

//         return res.status(httpStatus.OK).send(logsByServer);
//     } catch {
        
//         return res.sendStatus(httpStatus.NOT_FOUND);
//     }
// }

// export async function findLogsByServerAndTask(req, res) {
//     const server = req.params.server;
//     const task = req.params.task;

//     try {
//         const logsByServerAndTask = await logsService.getLogsByServerAndTask(server, task);

//         return res.status(httpStatus.OK).send(logsByServerAndTask);
//     } catch {
        
//         return res.sendStatus(httpStatus.NOT_FOUND);
//     }
// }

export async function addLog(req, res) {
    const log = req.body

    try {
        await logsService.addLog(log);

        return res.status(201).send("log cadastrado no banco!");
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}