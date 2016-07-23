var express = require('express'),
    server_port = 8080,
    server_ip_address = '127.0.0.1',
    server = express();

server.use('/randomjoke', express.static('.'));

server.listen(server_port, server_ip_address, function () {
    console.log("http://" + server_ip_address + ":" + server_port + '/randomjoke');
});
