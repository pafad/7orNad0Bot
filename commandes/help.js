  const config = require("../config.json")
exports.run = (client, message, args) => {
    if(message.author.id !== "306119836503900161"){
      message.channel.send({ embed: {
      color: 0x9101ff,
      author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL,
      },
      title: `Commandes de ${client.user.tag}`,
      url: '',
       fields:[
       {
       name: `:gear: Modération`,
       value: `${config.prefix}ban, ${config.prefix}kick, ${config.prefix}lock, ${config.prefix}createrole, ${config.prefix}createvoice, ${config.prefix}createchannel, ${config.prefix}purge, ${config.prefix}setnick`,
       inline: true
       },        
       {
       name: `:gear: Information`,
       value: `${config.prefix}serverinfo, ${config.prefix}uptime`,
       inline: true
       },          
       {
       name: `:gear: Fun`,
       value: `${config.prefix}roll, ${config.prefix}ball`,
       inline: true
       },
       {
       name: `:gear: Vcs`,
       value: `${config.prefix}vcs-help`,
       inline: true
       }, 
       {
       name: `:gear: Musique`,
       value: `${config.prefix}add, ${config.prefix}play, ${config.prefix}join, ${config.prefix}time, ${config.prefix}skip, ${config.prefix}pause, ${config.prefix}resume, ${config.prefix}queue, volume+, voulme-`,
       inline: true
       },
       ],
      timestamp: new Date,
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
      },
    }})
    }else{
            message.channel.send({ embed: {
      color: 0x9101ff,
      author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL,
      },
      title: `Commandes de ${client.user.tag}`,
      url: '',
       fields:[{
       name: `:gear: Développeur`,
       value: `${config.prefix}die, ${config.prefix}setavatar, ${config.prefix}restart, ${config.prefix}eval`,
       inline: true
       },
       {
       name: `:gear: Modération`,
       value: `${config.prefix}ban, ${config.prefix}kick, ${config.prefix}lock, ${config.prefix}createrole, ${config.prefix}createvoice, ${config.prefix}createchannel, ${config.prefix}purge, ${config.prefix}setnick`,
       inline: true
       },        
       {
       name: `:gear: Information`,
       value: `${config.prefix}serverinfo, ${config.prefix}uptime`,
       inline: true
       },          
       {
       name: `:gear: Fun`,
       value: `${config.prefix}roll, ${config.prefix}ball`,
       inline: false
       },
       {
       name: `:gear: Vcs`,
       value: `${config.prefix}vcs-help`,
       inline: true
       }, 
       {
       name: `:gear: Musique`,
       value: `${config.prefix}add, ${config.prefix}play, ${config.prefix}join, ${config.prefix}time, ${config.prefix}skip, ${config.prefix}pause, ${config.prefix}resume, ${config.prefix}queue, volume+, voulme-`,
       inline: true
       },
       ],
      timestamp: new Date,
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
      },
    }})
    }
}
