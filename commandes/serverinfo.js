const moment = require("moment")
module.exports.run = async (client, message, args) => {
  const config = require("../config.json")
  message.channel.send({embed:{
    color: 0x9101ff,
     author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `${message.guild.name}`,
url: '',
thumbnail:{
url:message.guild.iconURL
},
fields: [
{
name: ':gear: -> ID du serveur',
value: `${message.guild.id}`,
inline: true
},
{
name: ':gear: -> propriétaire du serveur',
value: `${message.guild.owner.user.username}`,
inline: true
},
{
name: ':gear: -> créé le:',
value: `${moment(message.guild.createdAt).format('D/M/Y HH:mm:ss')}`,
inline: false
},
{
name: ':gear: -> nombre de membres humain ',
value: message.guild.members.filter(f => !f.user.bot).size,
inline: false
},
{
name: ':gear: -> nombre de membres bots ',
value: message.guild.members.filter(f => f.user.bot).size,
inline: false
},
{
name: ':gear: -> nombre de membres total ',
value: message.guild.members.size,
inline: false
},
{
name:":gear: -> nombre d'utilisateurs en ligne", 
value:message.guild.members.filter(f => f.user.presence.status === "online").size, 
inline:false
}, 
{
name:":gear: -> nombre d'utilisateurs en afk", 
value:message.guild.members.filter(f => f.user.presence.status === "idle").size, 
inline:false
}, 
{
name:":gear: -> nombre d'utilisateurs en ne pas déranger", 
value:message.guild.members.filter(f => f.user.presence.status === "dnd").size, 
inline:false
}, 
{
name:":gear: -> nombre d'utilisateurs en hors ligne", 
value:message.guild.members.filter(f => f.user.presence.status === "offline").size, 
inline:false
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
value:  `fais __${config.prefix}roleslist__ pour avoir une liste complète`,
inline: false
},
{
name: ':gear: -> liste de émojis',
value: message.guild.emojis.map(e => e).join(" ") ,
inline: false
}],
footer: {
icon_url: client.user.avatarURL,
text: `serverinfo by shiro`
}
}})
}

module.exports.help = {
  name: "serverinfo",
  description:"information à propos du serveur",
  usage:"serverinfo/si",
  category:"info"
}

module.exports.conf = {
  aliases:["si"]
}
