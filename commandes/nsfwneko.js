const bot = require("nekos.life")
module.exports.run = async (client, message, args) => {
const neko = new bot();
if(!message.channel.nsfw)return message.channel.send(":x: tu n'es pas dans un channel nsfw.")
neko.getNSFWNeko().then((m) => message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
    title:`requête de ${message.author.username}`,
    image:{
        url:m.url
    },
    timestamp:new Date(),
footer:{
    icon_url:message.author.avatarURL,
    text:"nsfwneko"
}
}}))
} 

module.exports.help = {
    name:"nsfwneko"
}
