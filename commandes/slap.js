const slap = require("nekos.life")
module.exports.run = async (client, message, args) => {
const neko = new slap();
var usermention = message.mentions.users.first();
if(!usermention)return message.channel.send(":x: Il faut que tu mentionne un utilisateur.")
neko.getSFWSlap().then((m) => message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
    title:`${usermention.username} tu as reçu une claque de ${message.author.username}`,
    image:{
        url:m.url
    },
    timestamp:new Date(),
footer:{
    icon_url:message.author.avatarURL,
    text:"slap"
}
}}))
} 

module.exports.help = {
    name:"slap",
    description:"donne une claque à quelqu'un",
    usage:"slap @mention",
    category:"fun"
}

module.exports.conf = {
    aliases:["claque"]
  }