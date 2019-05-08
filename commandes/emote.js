module.exports.run = async (client, message, args) => {

if(args.length == 0) return message.channel.send(":x: Entre un nom d'emoji valide.") 

try{
var e = client.emojis.find(emote => emote.name === args[0])
message.channel.send({embed:{author:{
icon_url:message.author.avatarURL,
name:message.author.username
}, 
color:0xffff00,
fields:[{
name:"gear -> Nom :", 
value:e.name
},
{
name:"gear -> ID :",
value:e.id
}], 
image:{
url:e.url
},
timestamp:new Date(), 
footer:{
icon_url:client.user.avatarURL,
text:"emote" 
}
}})
} catch (e) {
message.channel.send(":x: Aucun résultat trouvé.") 
} 

}

module.exports.help = {
name:"emote",
description:"donne l'émoji en question",
usage:"emote/emoji <nom de l'emoji>",
category:"info"
} 

module.exports.conf = {
aliases:["emoji"]
} 
