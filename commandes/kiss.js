const kiss = require("nekos.life")
module.exports.run = async (client, message, args) => {
const neko = new kiss();
var usermention = message.mentions.users.first();
if(!usermention)return message.channel.send(":x: Il faut que tu mentionne un utilisateur.")
neko.getSFWKiss().then((m) => message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
    title:`${usermention.username} tu as reçu un bisou de ${message.author.username}`,
    image:{
        url:m.url
    },
    timestamp:new Date(),
footer:{
    icon_url:message.author.avatarURL,
    text:"kiss"
}
}}))
} 

module.exports.help = {
    name:"kiss"
}
