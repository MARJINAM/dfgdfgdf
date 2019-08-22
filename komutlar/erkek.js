 const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
if (!message.member.roles.has(`602821408216580097`) && !message.member.roles.has(`613859298971353109`)) return message.channel.send(`⚠ **|** Üzgünüm, yetkin yok.`)
    if (!args[0]) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
    let uye = message.mentions.members.first() || message.guild.member(args[0]) || message.guild.members.find(e => e.displayName.toLowerCase().includes(args[0].toLowerCase()))
    if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene`)
    if (uye.roles.has(`613860490174791730`)) {
    let rol = message.guild.roles.find(e => e.id === '613860490174791730')
    let embed = new Discord.RichEmbed()
    .setColor(rol.hexColor)
    .setDescription(`:beginner: <@${uye.id}> üyesinden ${rol} rolü alındı.`)
    .setFooter(`Yetkili: ${message.author.tag}`)
    .setTimestamp()
    uye.removeRole(`613860490174791730`)
    uye.addRole(`613479691910905902`)
    message.delete()
    message.channel.send(embed)
    } else {
    let rol = message.guild.roles.find(e => e.id === '613479691910905902')
    let embed = new Discord.RichEmbed()
    .setColor(rol.hexColor)
    .setDescription(`:mens: <@${uye.id}> üyesine ${rol} rolü verildi. `)
    .setFooter(`Yetkili: ${message.author.tag}`)
    .setTimestamp()
    uye.addRole(`613479691910905902`)
    uye.removeRole(`613860490174791730`)
    message.delete()
    message.channel.send(embed)

    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'erkek',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "erkek"
};; 