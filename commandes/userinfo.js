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
name:":gear: -> Date de création:", 
value:`Créé le : ${moment(sender.ceatedAt).format("D-M-Y à HH:mm:ss")} `
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
}
],
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
name:":gear: -> Date de création:", 
value:`Créé le : ${moment(User.ceatedAt).format("D-M-Y à HH:mm:ss")} `
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
name:":gear: -> Liste de rôles:", 
value:mention.roles.size > 25 ? "Il a trop de rôles" : mention.roles.map(r => r).join(" ")
}
],
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
aliases:["ui"] 
} 
