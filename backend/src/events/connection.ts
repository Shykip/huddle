import { io } from '../config/socket';

io.on('connection', (socket) => {

    console.log('User connected');
})
