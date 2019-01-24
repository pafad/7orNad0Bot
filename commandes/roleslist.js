module.exports.run = async (client, message, args) => {
  message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
     author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `Les rôles de : ${message.guild.name}`,
url: '',
description: message.guild.roles.map(r => r.name), 
timestamp: new Date(),
footer: {
icon_url: client.user.avatarURL,
text: `roleslist by shiro`
},
}})
}

module.exports.help = {
  name: "roleslist",
  description:"liste des rôles du serveur",
  usage:"roleslist/rl",
  category:"info"
}

module.exports.conf = {
  aliases:["rl"]
}
