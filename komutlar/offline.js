const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("> Yetkiniz Bu Komudu Kulanmaya Yetmiyor")
)
message.channel.send( '@everyone',
new Discord.MessageEmbed()
.setAuthor(`${ayarlar.isim} is offline IP Adress connect ${ayarlar.ip}`)
.setImage("https://cdn.discordapp.com/attachments/920065359392952320/957662327086415892/Bakm_Zaman.gif") 
.setFooter(`${ayarlar.isim} | Server Status | `)
.setTimestamp()
)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bakım"],
  permLevel: 3
};
exports.help = {
  name: 'offline',
  description: 'Komutun Açıklaması.',
  usage: 'bos '
  };

  