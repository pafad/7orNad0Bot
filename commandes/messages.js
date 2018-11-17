const db = require("quick.db")

module.exports.run = async (client, message, args) => {

    let member = message.mentions.members.first() || message.member;
    let global = await db.fetch(`GlobalMessages_${member.id}`);
    let guild = await db.fetch(`GuildMessages_${message.guild.id}${member.id}`)

    message.channel.send({embed:{
        color:Math.floor(Math.random() * 16777214) + 1,
        author:{
            name:`Rank de ${member.user.username}`,
            icon_url:message.author.avatarURL
        },
        fields:[{
            name:"Total de messages global",
            value:`${global} Messages`
        },
        {
            name:"Total des messages depuis ce serveur",
            value:`${guild} Messages`
        }],
        timestamp:new Date,
        footer:{
            icon_url:client.user.avatarURL,
            text:"messages"
        }
    }})
}

module.exports.help = {
    name:"messages",
    description:"nombre de messages que tu as envoyés globalement et dans la guilde",
    usage:"messages/msg @mention",
    category:"global"
}

module.exports.conf = {
    aliases:["msg"]
}