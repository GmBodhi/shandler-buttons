const Discord = require('discord.js')
const  SHClient = require('shandler')

const client = new Discord.Client()

const options = {
    commandsDir: 'commands',
    showLogs:'extra',
}

const hndlr = new SHClient(client, options)

client.on('ready', () => {
    console.log(client.user.tag+" is ready")
})


client.login(require('./config.json').token)