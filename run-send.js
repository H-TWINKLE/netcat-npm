const NetcatClient = require('netcat/client')
const faker = require("faker")
const client = new NetcatClient()


faker.locale = "zh_CN";

const loop = (_index) => {
    setTimeout(() => {
        const sendText = faker.name.lastName() + faker.name.firstName() + " , " + _index + " , now date is " + new Date().toISOString();
        client.udp().port(19098).init().send(sendText, '127.0.0.1')
        loop(_index + 1)
    }, 1000)
}

loop(0)

