const tickle = require("nekos.life")
module.exports.run = async (client, message, args) => {
const neko = new tickle();
var usermention = message.mentions.users.first();
if(!usermention)return message.channel.send(":x: Il faut que tu mentionne un utilisateur.")
neko.getSFWTickle().then((m) => message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
    title:`${usermention.username} tu as reçu des chatouilles de ${message.author.username}`,
    image:{
        url:m.url
    },
    timestamp:new Date(),
footer:{
    icon_url:message.author.avatarURL,
    text:"tickle"
}
}}))
} 

module.exports.help = {
    name:"tickle",
    description:"chatouille quelqu'un",
    usage:"tickle/chatouille @mention"
}

module.exports.conf = {
    aliases:["chatouille"]
  }