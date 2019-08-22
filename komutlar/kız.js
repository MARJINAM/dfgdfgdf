 const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
if (!message.member.roles.has(`602821408216580097`) && !message.member.roles.has(`614156052815937546`)) return message.channel.send(`⚠ **|** Üzgünüm, yetkin yok.`)
    if (!args[0]) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
    if (!args[0]) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
    let uye = message.mentions.members.first() || message.guild.member(args[0]) || message.guild.members.find(e => e.displayName.toLowerCase().includes(args[0].toLowerCase()))
    if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene`)
    if (uye.roles.has(`613860490174791730`)) {
    let rol = message.guild.roles.find(e => e.id === '613860490174791730')
    let embed = new Discord.RichEmbed()
    .setColor(rol.hexColor)
    .setFooter(`${message.author.tag}`)
    .setTimestamp()
    .setDescription(`<@${uye.id}> üyesinden ${rol} rolü alındı. :beginner:`)
    uye.removeRole(`613860490174791730`)
    uye.addRole(`613479760193912859`)
    message.delete()
    message.channel.send(embed)
    } else {
    let rol = message.guild.roles.find(e => e.id === '613479760193912859')
    let embed = new Discord.RichEmbed()
    .setColor(rol.hexColor)
    .setDescription(`:womens: <@${uye.id}> üyesine ${rol} rolü verildi. `)
    .setFooter(`${message.author.tag}`)
   .setTimestamp()
    uye.addRole(`613479760193912859`)
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
  name: 'kız',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "kız"
};;