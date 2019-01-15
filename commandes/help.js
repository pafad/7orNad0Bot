const config = require("../config.json")
module.exports.run = async (client, message, args) => {
  
  if(!args || args.length < 1) { 
   message.author.send({embed:{
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
       name : "Musique ", 
       value :`${client.commands.filter(cmd => cmd.help.category == "music").map( c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
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
   message.channel.send("Help envoyé en mp !")
   }else{
    try {
      message.channel.send({embed:{
        color:Math.floor(Math.random() * 16777214) + 1,
      author:{
        name:`Commande : ${client.commands.get(args[0]).help.name}`,
        icon_url:message.author.avatarURL
      },
      description:`\`\`description\`\` : ${client.commands.get(args[0]).help.description}\n\`\`Utilisation\`\` : ${client.commands.get(args[0]).help.usage}\n\`\`Catégorie\`\` : ${client.commands.get(args[0]).help.category}`,
      timestamp:new Date,
      thumbnail:{
        url:client.user.avatarURL
      },
      footer:{
        icon_url:client.user.avatarURL,
        text:`help : ${client.commands.get(args[0]).help.name}`
    }
    }})
    } catch (error) {
      message.channel.send("Commande non reconnue")
    }
  }
}
module.exports.help = {
    name:"help",
    description:`affiche ce massage ou ${config.prefix}help <commande> pour plus de détails.`,
    usage:"help/h",
    category:"info"
}

module.exports.conf = {
  aliases:["h"]
}
