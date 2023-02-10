const fivereborn = require('fivereborn-query');
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

module.exports = client => {
  console.log( ` [${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`);

  console.log(` [${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);

  function activity(){ 
    setTimeout(() => { 
        fivereborn.query(ayarlar.ip,ayarlar.port, (err, data) => { 
            if (err) { 
                return console.log(err); 
            } else { 
                client.user.setActivity(`online players: ${data.clients}`); 
            }
        });
        activity(); 
    }, 1000); 
}
activity(); 
};

