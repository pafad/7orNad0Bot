exports.run = (client, message, args) => {
  message.channel.send({embed:{
    color: 0x9101ff,
     author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `${message.guild.name}`,
url: '',
fields: [
{
name: ':gear: -> propriétaire du serveur',
value: `${message.guild.owner.user.username}`,
inline: false
},
{
name: ':gear: -> créé le:',
value: `${message.guild.createdAt}`,
inline: false
},
{
name: ':gear: -> nombre de membres',
value: message.guild.members.size,
inline: false
},
{
name: ':gear: -> nombre de rôles',
value: `${message.guild.roles.size}`,
inline: false
},
{
name: ':gear: -> nombre de channels',
value: `${message.guild.channels.size}`,
inline: false
},
{
name: 'liste des rôles',
value: message.guild.roles.map(r => r.name).length > 500 ? "fait __7serverroles__ pour avoir une liste compète": message.guild.roles.map(r => r.name)
},
],
footer: {
icon_url: client.user.avatarURL,
text: `serverinfo by shiro`
},
}})
}
