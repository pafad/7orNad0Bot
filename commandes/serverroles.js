module.exports.run = async (client, message, args) => {
  message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
     author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `${message.guild.name}`,
url: '',
fields: [
{
name: ':gear: -> liste de rôles',
value: `${message.guild.roles.map(r => r.name)}`,
inline: false
}],
timestamp: new Date(),
footer: {
icon_url: client.user.avatarURL,
text: `serverinfo by shiro`
},
}})
}

module.exports.help = {
  name: "serverroles"
}