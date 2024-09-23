import { PrismaClient } from "@prisma/client";

class DB {
    private static instance: DB;
    private client: PrismaClient;

    private constructor() {
        this.client = new PrismaClient();
    }

    public static getInstance(): DB {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance;
    }

    public getClient(): PrismaClient {
        return this.client;
    }
}

export default DB;
