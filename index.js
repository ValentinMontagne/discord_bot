import Discord from 'discord.js'
import Config from './config'

const client = new Discord.Client();

client.login(Config.token);
