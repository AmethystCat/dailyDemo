const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected--------');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat messages', (msg) => {
    	console.log(`message: ${msg}`);
    	io.emit('chat messages', msg);
    });
});

app.get('/',(req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
