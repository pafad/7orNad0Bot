const sm = require ("string-similarity") ;

module.exports.run = async (client, message, args) => {

if(! message.member.hasPermission("MANAGE_ROLES")){

	message.channel.send (":x: Tu n'as pas la permission de gérer les rôles.") 
return;
}else{

if(! args || args.length < 1){

	message.channel.send (":x: Spécifie le rôle à éditer.")

	return;

}else{

	let roles = [];

        let indexes = [];

        message.guild.roles.forEach(function(role){

            roles.push(role.name)

            indexes.push(role.id)

        })

        let match = sm.findBestMatch(args.join(" "), roles);

        let rolename = match.bestMatch.target;

        let toMention = message.guild.roles.get(indexes[roles.indexOf(rolename)])

  var Mention = message.guild.roles.find("id", args.join(" ")) || toMention;

if(!Mention) {

	message.channel.send("Aucun rôles trouvé essayé le nom ou l'id")

	return;

}else{
 if(!message.content.includes("#")) {
 message.channel.send(":x: Tu dois entrer une couleur en format hexadécimal ex : `°#010101`") 
 return;
} else {
 message.guild.roles.get(Mention.id).setColor(args[1]) 

 message.channel.send(`La couleur du rôle **${Mention.name}** est désormais : ${args[1]}`)

}

}

} 

} 

	

	

} 

module.exports.help = {

name:"rolecolor", 

description:"change la couleur du rôle souhaité",

usage:"rolecolor/rcolor <rôle>",

category:"modération" 

} 

module.exports.conf = {

aliases:["rmention"] 

} 
