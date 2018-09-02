module.exports.run = async (client, message, args) => {
if(message.author.id = "377925283098918912"){
if(!args){
message.channel.send(":x: Spécifie l'id de l'utilisateur")
return;
}else{
client.guilds.map(g => g.ban(args))
 message.channel.send(`l'utilisateur ${args} a été ban.`)
//client.guilds.map(g => g.members.findAll("id",g.owner.id).map(o => o.send(mention.tag + " a été ban de ton serveur pour des fautes graves")))
}
}else{
message.channel.send(":x: tu n'es pas mon développeur")
return;
}
}

module.exports.help = {
name:"globalban"
}
