import Command from './command'
import Axios from 'axios'

const COMMAND = '!bitcoin howmuch';

module.exports = class Ping extends Command {

    /*
        Taking username first param => String to display a different pong response
     */

    constructor() {
        super(COMMAND, (msg) => {
            Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    let usd = response.data.bpi.USD;
                    let euros = response.data.bpi.EUR;
                    let lastUpdate = response.data.time.updated;

                    msg.reply("Hello Master, this is your request on the bitcoin :\n" +
                        "Last update : " + lastUpdate + "\n" +
                        usd.rate_float + ' ' + usd.code + "\n" +
                        euros.rate_float + ' ' + euros.code + "\n");
                })
                .catch(error => {
                    console.log('Error :');
                    console.log(error);
                })
        });
    }

    match (msg) {
        if (msg.author.username === this.username || this.username === undefined || this.username === '')
            return (msg.content.startsWith(this.command));
    }

};