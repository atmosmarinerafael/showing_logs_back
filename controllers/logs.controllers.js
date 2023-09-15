import httpStatus from "http-status";
import logsService from "../services/logs-service/index.js";

export async function findLogs(req, res) {
    
    try {
        const logs = await logsService.getLogs();


        return res.status(httpStatus.OK).send(logs);
    } catch {
        
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function addLog(req, res) {
    const log = res.locals.log;

    try {
        await logsService.addLog(log);

        return res.status(201).send("log cadastrado no banco!");
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}