import Command from './command'
import Axios from 'axios'
import Config from '../config'

const COMMAND = '!speak ';
const API_URL = 'https://www.cleverbot.com/getreply?key=' + Config.cleverBotToken + '&input=';

module.exports = class Ping extends Command {

    /*
        Taking username first param => String to display a different pong response
     */

    constructor() {
        super(COMMAND, (msg) => {
            let tchat = this.parseMsgContent(msg.content);
            let url = this.computeURL(tchat);

            console.log(url);
            Axios.get(url)
                .then(response => {
                    console.log(response.data);
                    this.cs = response.data.cs;
                    msg.reply(response.data.output);
                })
                .catch(error => {
                    console.log('Error :');
                    console.log(error);
                })
        });
        this.cs = undefined;
    }

    parseMsgContent(content) {
        let tchat = content.split(' ');

        tchat.shift();
        tchat = tchat.join(' ');
        return (tchat);
    }

    computeURL(content) {
        let url = API_URL + encodeURIComponent(content);

        if (this.cs !== undefined)
            url += '&cs=' + this.cs;
        return (url);
    }

    match (msg) {
        return (msg.content.startsWith(this.command));
    }

};