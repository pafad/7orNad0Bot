module.exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: Math.floor(Math.random() * 16777214) + 1, //pour une couleur en mode random
        fields:[{
        name:"Owner du bot",
        value: client.users.find("id", "491878353960304640").tag, //pas oublier le s de client.users
        inline: false //field en ligne : Vrai ou Faux true/false
        },
        {
        name: "Version de node",
        value: process.version, //version du processus
        inline: false
        },
        {
        name: "Mémoire utilisée(à tester)",
        value: process.memoryUsage() + "MB", // en test
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
    usage:"botinfo/info/bi"
}

module.exports.conf = {
    aliases:["bi", "info"]
  }