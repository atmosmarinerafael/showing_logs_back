import { NomeDaCollection } from "../../database/db";

export async function findLogs() {
    const logs = await NomeDaCollection.find().toArray();
    
    return logs;
}
