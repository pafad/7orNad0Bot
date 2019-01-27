const moment = require("moment") 
module.exports.run = async (client, message, args) => {
var mention = msg.mentions.members.first() ;
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
value:`Créé le : ${moment(sender.ceatedAt).format("D-M-Y à HH:mm:Ss")} `
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
} else {

} 

} 
