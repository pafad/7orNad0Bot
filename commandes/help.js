const config = require("../config.json")
module.exports.run = async (client, message, args) => {
  
  if(!args || args.length < 1) { 
   message.author.send({embed:{
    color:Math.floor(Math.random() * 16777214) + 1,
    title:`Commandes de ${client.user.username} (${client.commands.size})`,
    url:`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=-1`,
    fields:[{
      name:"Owner (" + client.commands.filter(c => c.help.category === "owner").size+")",
      value:`${client.commands.filter(cmd => cmd.help.category =="owner").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
    },
    {
      name:"Modération ("+client.commands.filter(c => c.help.category === "modération").size+")",
      value:`${client.commands.filter(cmd => cmd.help.category =="modération").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
    },
    {
      name:"Info ("+client.commands.filter(c => c.help.category === "info").size+")" ,
      value:`${client.commands.filter(cmd => cmd.help.category =="info").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
    },
    {
    name:"Utilité ("+client.commands.filter(c => c.help.category === "utility").size+")" ,
    value:`${client.commands.filter(cmd => cmd.help.category =="utility").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
    },
     {
       name : "Musique ("+client.commands.filter(c => c.help.category === "music").size+")", 
       value :`${client.commands.filter(cmd => cmd.help.category == "music").map( c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
       }, 
    {
      name:"Fun ("+client.commands.filter(c => c.help.category === "fun").size+")",
      value:`${client.commands.filter(cmd => cmd.help.category =="fun").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
    },
     {
      name:"NSFW ("+client.commands.filter(c => c.help.category === "nsfw").size+")" ,
      value:`${client.commands.filter(cmd => cmd.help.category =="nsfw").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
    },
    {
      name:"Vcs ("+client.commands.filter(c => c.help.category === "vcs").size+")",
      value:`${client.commands.filter(cmd => cmd.help.category =="vcs").map(c => `\`\`${config.prefix + c.help.name}\`\` : ${c.help.description}\n`).join(" ")}`
    },
    {
      name:"Support ("+client.commands.filter(c => c.help.category === "support").size+")" ,
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
      description:`\`\`description\`\` : ${client.commands.get(args.join(" ")).help.description}\n\`\`Utilisation\`\` : ${client.commands.get(args.join(" ")).help.usage}\n\`\`Catégorie\`\` : ${client.commands.get(args.join(" ")).help.category}`,
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
  aliases:["h"],
cooldown:3
}
