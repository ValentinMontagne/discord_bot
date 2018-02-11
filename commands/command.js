module.exports = class Command {

    /*
        Taking command first param => String token
        Taking action second param => Function that take the message on first param
     */

    constructor(command, action) {
        this.command = command;
        this.action = action;
    }

    parse(msg) {
        if (this.match(msg)) {
            this.action(msg);
            return true
        }
        return false
    }

    match(msg) {
        return (msg.content.startsWith(this.command));
    }

};