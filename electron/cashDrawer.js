const { SerialPort } = require('serialport');
const Action = require('../BD/bd');

module.exports = new class cashDrawer {

    //finding device and connect to it
    constructor(){
        SerialPort.list()
            .then((data)=>{
                //getting setting port by product id (finding port of device)
                this.setting = data.find((cur)=> cur.productId == '2303' )
            })
            .then(()=>{
                //connect device port
                this.port = new SerialPort({
                    path: this.setting.path,
                    baudRate: 9600
                })
            })
            .catch(()=>{
                console.log('Not Found')
            })
    }

    async open(){
        //send open commant to device
        this.port.write('open')

        //add event into BD
        Action.create({});
    }
}