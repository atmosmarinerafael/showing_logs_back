import httpStatus from "http-status";
import logsService from "../services/logs-service";

export async function findLogs(req, res) {
    
    try {
        const logs = await logsService.getLogs();

        return res.status(httpStatus.OK).send(logs);
    } catch {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}