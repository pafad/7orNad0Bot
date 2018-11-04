const pat = require("nekos.life")
module.exports.run = async (client, message, args) => {
const neko = new pat();
var usermention = message.mentions.users.first();
if(!usermention)return message.channel.send(":x: Il faut que tu mentionne un utilisateur.")
neko.getSFWPat().then((m) => message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
    title:`${usermention.username} tu as reçu une caresse de ${message.author.username}`,
    image:{
        url:m.url
    },
    timestamp:new Date(),
footer:{
    icon_url:message.author.avatarURL,
    text:"pat"
}
}}))
} 

module.exports.help = {
    name:"pat",
    description:"caresse quelqu'un",
    usage:"pat/caresse @mention",
    category:"fun"
}

module.exports.conf = {
    aliases:["caresse"]
  }