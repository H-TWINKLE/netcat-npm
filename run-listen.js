const NetcatServer = require('netcat/server')

const server = new NetcatServer()

server.udp().port(9098).listen().on('data', function (rinfo, data) {
    console.log('Got Data:', data.toString(), 'from', rinfo.address, rinfo.port)
})

