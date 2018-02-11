import Discord from 'discord.js'
import Config from './config'
import Ping from './commands/ping'

const bot = new Discord.Client();
const cmds = [
    new Ping('Draquefire', (msg) => {
        msg.reply('Hello master Draquefire, the lord of everything on this earth');
    }),
    new Ping('Orthos', (msg) => {
        msg.reply('Hello my creator');
    }),
    new Ping('', (msg) => {
        msg.reply('Hello master');
    })
];

bot.on('ready', () => {
    bot.user.setActivity('Coding an amazing thing...').catch(console.error);
    console.log('Bot connected !');
});

bot.on('message', (message) => {
    cmds.some((cmd) => {
        return cmd.parse(message)
    })
});

bot.login(Config.token);