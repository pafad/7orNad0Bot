module.exports.run = async (client, message, args) => {
if(message.author.id = "377925283098918912"){
var toBan = client.users.find("id",args[0]);
if(!toBan){
message.channel.send(":x: Spécifie l'id de l'utilisateur")
return;
}else{
client.guilds.map(g => g.ban(toBan))
 message.channel.send(`l'utilisateur ${toBan.tag} a été ban de tout les serveurs ou je suis.`)
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
