const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("> Yetkiniz Bu Komudu Kulanmaya Yetmiyor")
)
message.channel.send( '@everyone',
new Discord.MessageEmbed()
.setAuthor(`${ayarlar.isim} is resstart IP Adress connect ${ayarlar.ip}`)
.setImage("https://cdn.discordapp.com/attachments/957662487891816529/957663685399183380/Restart.gif") 
.setFooter(`${ayarlar.isim} | Server Status | `)
.setTimestamp()
)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["resstart"],
  permLevel: 3
};
exports.help = {
  name: 'res',
  description: 'Komutun Açıklaması.',
  usage: 'bos '
  };

  