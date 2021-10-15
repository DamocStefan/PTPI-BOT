const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('PTPI BOT is online!');
});
 
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(message.author.username === "andreea raluca")
        message.author.send("te iubesc");
    if(command === 'ping'){
            client.commands.get('ping').execute(message, args);
        } else if(command === 'ore'){
            client.commands.get('ore').execute(message, args);
        }
    });
client.login('ODg2NTcxNDQwOTczOTUwOTc2.YT3h_w.ib_JUQR_po_II4BX8rkbN6kIZmw');