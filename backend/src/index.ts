import express from "express";
import userRouter from "./routes/user";
import { app, server } from "./config/socket";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.SERVER_PORT || 8080;

app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN || 'localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}))

app.use("/", userRouter);

server.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
})