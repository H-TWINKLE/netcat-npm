const NetcatClient = require('netcat/client')

const client = new NetcatClient()


const loop = (_index) => {
    setTimeout(() => {
        const sendText = _index + " , now date is " + new Date().toISOString();
        client.udp().port(21000).init().send(sendText, '127.0.0.1')
        loop(_index + 1)
    }, 1000)
}

loop(0)

