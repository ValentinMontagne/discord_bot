import Command from './command'

const COMMAND = '!ping';
const BOTNAME = '#Orthos';

module.exports = class Ping extends Command {

    /*
        Taking username first param => String to display a different pong response
     */

    constructor(username, action) {
        super(COMMAND, action);
        this.username = username;
    }

    match(msg) {
        if (msg.author.username === this.username || this.username === undefined || this.username === '')
            return (msg.content.startsWith(this.command + " " + BOTNAME));
    }

};