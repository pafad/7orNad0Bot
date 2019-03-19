const poke = require("nekos.life")
module.exports.run = async (client, message, args) => {
const neko = new poke();
var usermention = message.mentions.users.first();
if(!usermention)return message.channel.send(":x: Il faut que tu mentionne un utilisateur.")
neko.getSFWPoke().then((m) => message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
    title:`${usermention.username} tu as reçu un poke de ${message.author.username}`,
    image:{
        url:m.url
    },
    timestamp:new Date(),
footer:{
    icon_url:message.author.avatarURL,
    text:"poke"
}
}}))
} 

module.exports.help = {
    name:"poke",
    description:"donne une pichenette à quelqu'un",
    usage:"poke @mention",
    category:"fun"
}

module.exports.conf = {
    aliases:[],
cooldown:3
  }
