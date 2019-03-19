const moment = require("moment") 
module.exports.run = async (client, message, args) => {
var mention = message.mentions.members.first();
var sender = message.author;
if(!mention) {
message.channel.send({embed:{
color:0x010101,
title:`Informations sur ${sender.tag}`, 
thumbnail:{
url:sender.avatarURL
},
fields:[
{
name:":gear: -> Username:", 
value:sender.username
},
{
name:":gear: -> Tag:", 
value:"#" +sender.discriminator
},
{
name:":gear: -> Bot:", 
value:!sender.bot ? "Humain" : "Bot"
}, 
{
name:":gear: -> Date de création:", 
value:`Créé le : ${moment(sender.createdAt).format("D/M/Y à HH:mm:ss")} `
}, 
{
name:":gear: -> Serveur rejoint le:", 
value:moment(message.member.joinedAt).format("D/M/Y à HH:mm:ss") 
}, 
{
name:":gear: -> Nickname:", 
value: message.member.nickname == undefined ? "Aucun surnom" : message.member.nickname
}, 
{
name:":gear: -> Statut:", 
value:message.member.user.presence.status
}, 
{
name:":gear: -> Jeu:", 
value: !message.member.user.presence.game ? "Pas de jeu" : message.member.user.presence.game.name
},


{
name:":gear: -> Liste de rôles:", 
value:message.member.roles.size > 25 ? "T'as trop de rôles" : message.member.roles.map(r => r).join(" ")
}, 
{
name:":gear: -> Liste de permissions:", 
value:message.member.permissions.toArray().join(", ").toLowerCase()
} 

],
timestamp:new Date(), 
footer:{
icon_url:client.user.avatarURL,
text:"userinfo" 
} 
}}) 
return;
} else {
var User = mention.user;
message.channel.send({embed:{
color:0x010101,
title:`Informations sur ${User.tag}`, 
thumbnail:{
url:User.avatarURL
},
fields:[
{
name:":gear: -> Username:", 
value:User.username
},
{
name:":gear: -> Tag:", 
value:"#" +User.discriminator
},
{
name:":gear: -> Bot:", 
value:!User.bot ? "Humain" : "Bot"
}, 
{
name:":gear: -> Date de création:", 
value:`Créé le : ${moment(User.createdAt).format("D/M/Y à HH:mm:ss")} `
}, 
{
name:":gear: -> Serveur rejoint le:", 
value:moment(mention.joinedAt).format("D/M/Y à HH:mm:ss") 
}, 
{
name:":gear: -> Nickname:", 
value: mention.nickname == undefined ? "Aucun surnom" : mention.nickname
}, 
{
name:":gear: -> Statut:", 
value:User.presence.status
}, 
{
name:":gear: -> Jeu:", 
value: !User.presence.game ? "Pas de jeu" : User.presence.game.name
},
{
name:":gear: -> Dernier message:", 
value:User.lastMessage.content
}, 
{
name:":gear: -> Liste de rôles:", 
value:mention.roles.size > 25 ? "Il a trop de rôles" : mention.roles.map(r => r).join(" ")
}, 
{
name:":gear: -> Liste de permissions", 
value:mention.permissions.toArray().join(", ").toLowerCase() 
} 
],
timestamp:new Date(), 
footer:{
icon_url:client.user.avatarURL,
text:"userinfo" 
} 
}}) 
} 

} 

module.exports.help = {
name:"userinfo", 
description:"Informations d'un utilisateur", 
usage:"userinfo/ui <@mention>", 
category:"info" 
} 

module.exports.conf = {
aliases:["ui"],
cooldown:3
} 
