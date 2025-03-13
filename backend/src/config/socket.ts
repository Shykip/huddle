import http from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.ORIGIN || 'localhost:3000',
        methods: ['GET', 'POST'],
    },
});

export { app, server, io }