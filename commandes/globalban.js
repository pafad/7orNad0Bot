module.exports.run = async (client, message, args) => {
if(message.author.id = "377925283098918912"){
var mention = message.mentions.users.first();
if(!mention){
message.channel.send(":x: mentionne un utilisateur")
return;
}else{
client.guilds.map(g => g.ban(mention))
client.guilds.map(g => g.owner.send(mention.tag + " a été ban de ton serveur pour des fautes graves"))
}
}else{
message.channel.send(":x: tu n'es pas mon développeur")
return;
}
}

module.exports.help = {
name:"globalban"
}
