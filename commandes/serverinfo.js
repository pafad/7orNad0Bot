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
name: ':gear: -> liste de rôles',
value: `${message.guild.roles.map(r => r.name)}`,
inline: false
},
{
name: ":gear: -> liste des emojis",
value: message.guild.emojis.map(e => `<:${e.name}:${e.id}>`),
inline: false
},
],
footer: {
icon_url: client.user.avatarURL,
text: `serverinfo by shiro`
},
}})
}
