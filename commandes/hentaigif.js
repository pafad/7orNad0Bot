const nsfw = require("nekos.life")
module.exports.run = async (client, message, args) => {
const neko = new nsfw();
if(!message.channel.nsfw) return message.channel.send("tu n'est pas dans un channel nsfw");
neko.getNSFWRandomHentaiGif().then((m) => message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
    title:`requête de ${message.author.username}`,
    image:{
        url:m.url
    },
    timestamp:new Date(),
footer:{
    icon_url:message.author.avatarURL,
    text:"hentaigif"
}
}}))
} 

module.exports.help = {
    name:"hentaigif"
}
