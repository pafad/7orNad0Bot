const sm = require ("string-similarity") ;
module.exports.run = async (client, message, args) => {
if(! message.member.hasPermission("ADMINISTRATOR")) return message.channel.send (":x: Tu n'as pas la permission administrateur.") 

if(! args || args. length < 1) return message.channel.send (":x: Spécifie le rôle à mentionner.") 

	let roles = [];
        let indexes = [];
        message.guild.members.forEach(function(role){
            membres.push(role.name)
            indexes.push(role.id)
        })

        let match = sm.findBestMatch(args.join(" "), roles);
        let rolename = match.bestMatch.target;

        let toMention = message.guild.roles.get(indexes[roles.indexOf(rolename)])
  var Mention = message.guild.roles.find("id", args.join(" ")) || toMention;

 message.channel.send(`<@&${Mention.id}>`)
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
