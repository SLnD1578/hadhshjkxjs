const Discord = require('discord.js');
const client = new Discord.Client();
client.setMaxListeners(100)
const bot = new Discord.Client();
const Canvas = require('canvas')
const fs = require("fs")
const moment = require ("moment")
const jimp = require ("jimp")
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Hi`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', message => {
  if (message.channel.id === "612798308070457367") {
    message.react('✅')
      .then(() => {
        message.react('❌')
      });
  }
}); 



client.on('message', message => {
  if (message.channel.id === "612793839241003011") {
    message.react('✅')
      .then(() => {
        message.react('❌')
      });
  }
}); 









client.login(process.env.BOT_TOKEN);
