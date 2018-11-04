const config = require("../config.json")
module.exports.run = async (client, message, args) => {
    message.channel.send({embed:{
        color:Math.floor(Math.random() * 16777214) + 1,
        title:`Commandes de ${client.user.username}`,
        url:`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=-1`,
        fields:[{
          name:"Owner",
          value:`${client.commands.filter(cmd => cmd.help.category =="owner").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
        },
        {
          name:"Modération",
          value:`${client.commands.filter(cmd => cmd.help.category =="modération").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
        },
        {
          name:"Info",
          value:`${client.commands.filter(cmd => cmd.help.category =="info").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
        },
        {
          name:"Fun",
          value:`${client.commands.filter(cmd => cmd.help.category =="fun").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
        },
        {
          name:"Vcs",
          value:`${client.commands.filter(cmd => cmd.help.category =="vcs").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
        },
        {
          name:"Support",
          value:`${client.commands.filter(cmd => cmd.help.category =="support").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
        }],
        thumbnail:{
          url:client.user.avatarURL
        },
        timestamp:new Date,
        footer:{
          icon_url:client.user.avatarURL,
          text:"help"
        }
       }})
}

module.exports.help = {
    name:"helphere",
    description:"affiche le help dans le channel de l'auteur du message",
    usage:"hh/helpici/helphere",
    category:"info"
}

module.exports.conf = {
    aliases:["hh", "helpici"]
}