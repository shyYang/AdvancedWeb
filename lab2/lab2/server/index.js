var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});
io.on('connection', function (socket) {
    console.log('client '+ socket.id + ' connected');
    //接收信息进行广播
    socket.on('player', function (data) {
        data.socketid = socket.id;
        socket.broadcast.emit('player', data);
    });
    //某客户端断开时
    socket.on('disconnect', function () {
        console.log('client ' + socket.id + ' disconnected');
        //进行广播
        socket.broadcast.emit('offline', {socketid: socket.id});
    })
});
http.listen(3000, function(){
    console.log('listening on *:3000');
});