module.exports.run = (client, message, args, opt) => {
    message.channel.send({embed:{
        color: Math.floor(Math.random() * 16777214) + 1, //pour une couleur en mode random
        fields:[{
        name:"Owner du bot",
        value: client.users.find("id", opt.OwnerID).tag, //pas oublier le s de client.users
        inline: false //field en ligne : Vrai ou Faux true/false
        },
        {
        name: "Version de node",
        value: process.version, //version du processus
        inline: false
        },
        {
        name: "Mémoire utilisée(à tester)",
        value: Math.round(process.memoryUsage().rss/1000000) + "MB",
        inline: false
        },
    ],
    thumbnail:{
        url:client.user.avatarURL
    },
    timestamp:new Date,
    footer:{
        text: "botinfo",
        icon_url:client.user.avatarURL
    }
    }})
}

module.exports.help = {
    name:"botinfo",
    description:"informations du bot",
    usage:"botinfo/info/bi", 
    category:"info" 
}

module.exports.conf = {
    aliases:["bi", "info"]
  }
