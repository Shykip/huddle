import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, // Your Neon DB URL from .env
    ssl: { rejectUnauthorized: false }, // Required for Neon databases
    synchronize: true, // Set to false in production
    logging: false,
    entities: ["src/models/**/*.ts"], // Adjust the path to your entities
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
})

export { AppDataSource }