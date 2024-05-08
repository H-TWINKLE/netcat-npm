const NetcatServer = require('netcat/server')

const server = new NetcatServer()

server.udp().port(21000).listen().on('data', function (rinfo, data) {
    console.log('Got', data.toString(), 'from', rinfo.address, rinfo.port)
})

