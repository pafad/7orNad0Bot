const moment = require("moment")
module.exports.run = async (client, message, args) => {
  const config = require("../config.json")
  if(message.guild.roles.size== 0 && message.guild.emojis.size == 0){
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
inline: false
},
{
name: ':gear: -> propriétaire du serveur',
value: `${message.guild.owner.user.username}`,
inline: false
},
{
name: ':gear: -> créé le:',
value: `${moment(message.guild.createdAt).format('D/M/Y à HH:mm:ss')}`,
inline: false
},
{
name: ":gear: -> tu as rejoins ce serveur le :", 
value:`${moment(message.member.joinedAt).format('D/M/Y à HH:mm:ss')} `, 
inline:false
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
value: "Aucun rôles.",
inline: false
},
{
name: ':gear: -> liste de émojis',
value: "Aucun émojis.",
inline: false
}],
footer: {
icon_url: client.user.avatarURL,
text: `serverinfo by shiro`
}
}})
   }else{
     if(message.guild.roles.size == 0){
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
inline: false
},
{
name: ':gear: -> propriétaire du serveur',
value: `${message.guild.owner.user.username}`,
inline: false
},
{
name: ':gear: -> créé le:',
value: `${moment(message.guild.createdAt).format('D/M/Y à HH:mm:ss')}`,
inline: false
},
{
name: ":gear: -> tu as rejoins ce serveur le :", 
value:`${moment(message.member.joinedAt).format('D/M/Y à HH:mm:ss')} `, 
inline:false
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
value: "Aucun rôles.",
inline: false
},
{
name: ':gear: -> liste de émojis',
value: message.guild.emojis.size < 25 ? message.guild.emojis.map(e => e).join(" ") : "trop d'emojis utilise la commande **"+ config.prefix+"emotelist**. ",
inline: false
}],
footer: {
icon_url: client.user.avatarURL,
text: `serverinfo by shiro`
}
}})
       }else{
  if(message.guild.emojis.size == 0){
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
inline: false
},
{
name: ':gear: -> propriétaire du serveur',
value: `${message.guild.owner.user.username}`,
inline: false
},
{
name: ':gear: -> créé le:',
value: `${moment(message.guild.createdAt).format('D/M/Y à HH:mm:ss')}`,
inline: false
},
{
name: ":gear: -> tu as rejoins ce serveur le :", 
value:`${moment(message.member.joinedAt).format('D/M/Y à HH:mm:ss')} `, 
inline:false
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
value: message.guild.roles.size < 25 ? message.guild.roles.map(e => e).join(" ") : "trop de rôles utilise la commande **"+ config.prefix +"roleslist**." ,
inline: false
},
{
name: ':gear: -> liste de émojis',
value: "Aucun émojis.",
inline: false
}],
footer: {
icon_url: client.user.avatarURL,
text: `serverinfo by shiro`
}
}})
   }else{
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
inline: false
},
{
name: ':gear: -> propriétaire du serveur',
value: `${message.guild.owner.user.username}`,
inline: false
},
{
name: ':gear: -> créé le:',
value: `${moment(message.guild.createdAt).format('D/M/Y à HH:mm:ss')}`,
inline: false
},
{
name: ":gear: -> tu as rejoins ce serveur le :", 
value:`${moment(message.member.joinedAt).format('D/M/Y à HH:mm:ss')} `, 
inline:false
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
value: message.guild.roles.size < 25 ? message.guild.roles.map(e => e).join(" ") : "trop de rôles utilise la commande **"+ config.prefix +"roleslist**." ,
inline: false
},
{
name: ':gear: -> liste de émojis',
value: message.guild.emojis.size < 25 ? message.guild.emojis.map(e => e).join(" ") : "trop d'emojis utilise la commande **"+ config.prefix+"emotelist**. ",
inline: false
}],
footer: {
icon_url: client.user.avatarURL,
text: `serverinfo by shiro`
}
}})
     
} 
} 
} 
  
  
  
  
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
