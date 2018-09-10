const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();                        // express server
let server = http.createServer(app);        // http server
let io = socketIO(server);

app.use(express.static(publicPath));        // tells express to use static files from public folder

io.on('connection', (socket) => {           // listens to event and fires callback when event met
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});



server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

