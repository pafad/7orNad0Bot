const moment = require("moment") 
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
        name: "Mémoire utilisée",
        value: Math.round(process.memoryUsage().rss/1000000) + "MB",
        inline: false
        },
        {
        name:"Nombre de commandes", 
        value: `il y a ${client.commands.size} commandes`, 
        inline:false
       }, 
         {
        name:"Date de création", 
        value:`J'ai été créé le : ${moment(client.user.createdAt).format("Y-M-D à HH:mm:ss")}`, 
        inline:false
      }, 
       {
        name:"Nombre de serveurs", 
        value:`Je suis dans : ${client.guilds.size} serveurs `, 
        inline:false
       }, 
        {
        name:"Nombre d'utilisateurs", 
        value:`Je suis avec : ${client.users.size} utilisateurs`, 
        inline:false
      },
        {
        name:"Support", 
        value:`https://discord.gg/XNTuPGb`, 
        inline:false
      }, 
        {
        name:"Invite", 
        value:`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=-1`, 
        inline:false
      }
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
    aliases:["bi", "info"],
cooldown:3
  }
