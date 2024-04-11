const express = require('express');

const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;
const db = require('./config/db/db');

const route = require('./routes/_route');

const server = require("http").createServer(app);
const io = require('socket.io')(server);


// connect to db
db.connect();

// http logger
app.use(morgan('combined'));

//static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', (socket) => { // kết nối tới client
    console.log('a user connected');

    socket.on('on-chat', (data) => { // nó sẽ nhận data từ kênh on-chat
        io.emit('user-chat', data) // gửi lại cho toàn bộ người dùng ở kênh user-chat một object data
    })
});

route(app);

server.listen(port, () => console.log(`App listening on port ${port}`));