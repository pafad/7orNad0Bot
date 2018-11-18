const sm = require ("string-similarity") ;
module.exports.run = async (client, message, args) => {
if(! message.member.hasPermission("ADMINISTRATOR")){
	message.channel.send (":x: Tu n'as pas la permission administrateur.") 
}else{

if(! args || args.length < 1){
	message.channel.send (":x: Spécifie le rôle à mentionner.")
	return
}else{

	let roles = [];
        let indexes = [];
        message.guild.members.forEach(function(role){
            roles.push(role.name)
            indexes.push(role.id)
        })

        let match = sm.findBestMatch(args.join(" "), roles);
        let rolename = match.bestMatch.target;

        let toMention = message.guild.roles.get(indexes[roles.indexOf(rolename)])
  var Mention = message.guild.roles.find("id", args.join(" ")) || toMention;
if(!Mention) {
	message.channel.send("Aucun rôles trouvé essayé le nom ou l'id")
	return
}else{
	
 message.channel.send(`<@&${Mention.id}>`)
}
}
} 
	
	
	
} 

module.exports.help = {
name:"rolemention", 
description:"mentionne le rôle souhaité",
usage:"rolemention/rmention <rôle>",
category:"modération" 
} 

module.exports.conf = {
aliases:["rmention"] 
} 
