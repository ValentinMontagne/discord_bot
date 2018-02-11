import Command from './command'

const PING = '!ping';
const BOTNAME = '#Orthos';

module.exports = class Ping extends Command {

    constructor(username, action) {
        super(PING, action);
        this.username = username;
    }

    match(msg) {
        if (msg.author === this.username || this.username === undefined || this.username === '')
            return (msg.content.startsWith(this.command + " " + BOTNAME));
    }

};