const sm = require("string-similarity") 
module.exports.run = async (client, message, args) => {
    let usermention = message.mentions.members.first();
    
    let roles = [];

        let indexes = [];

        message.guild.roles.forEach(function(role){

            roles.push(role.name)

            indexes.push(role.id)

        })

        let match = sm.findBestMatch(args.join(" "), roles);

        let rolename = match.bestMatch.target;

        let toMention = message.guild.roles.get(indexes[roles.indexOf(rolename)])
        
   let toAdd = message.guild.roles.find("name", args.join(" ")) || message.guild.roles.find("id", args.join(" ")) || toMention ;

       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(`${message.author}, tu n'as pas la permission de gérer les rôles.`);

       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`${message.author}, je n'ai pas la permission de lui ajouter ce rôle.`)

       if(!toAdd){

       message.channel.send(":x: Je ne trouve pas ce rôle.") 

       return;

      }else{

      	

       if(usermention){

       	

       if(usermention.roles.exists("id", `${toAdd.id}`)){

       	usermention.removeRole(toAdd.id)

       	message.channel.send(`[-] J'ai retiré le rôle **${toAdd.name}** à **${usermention.user.tag}** fais la même commande pour lui ajouter ce rôle.`)

       	return;

      		 }else{

       	usermention.addRole(toAdd.id)

       	message.channel.send(`[+] J'ai ajouté le rôle **${toAdd.name}** à **${usermention.user.tag}** fais la même commande pour lui retirer ce rôle.`)

       	}

       	return;

       }else{

  

        if(args[0].endsWith("members")){

        

        if(args[0].startsWith("+")) {

        message.channel.send(`[+] J'ajoute le rôle **${toAdd.name}** à **${message.guild.members.filter(m => !m.user.bot).size} membres**, un peu de patience, le bot a besoin de temps.`) 

        message.guild.members.filter(m => !m.user.bot).map(members => members.addRole(toAdd.id)) 

        

        }

        

       	if(args[0].startsWith("-")){

        message.channel.send(`[-] Je retire le rôle ${toAdd.name} à **${message.guild.members.filter(m => !m.user.bot).size} membres**, un peu de patience, le bot a besoin de temps.`) 

        message.guild.members.filter(m => !m.user.bot).map(members => members.removeRole(toAdd.id)) 

        

        }

        return;

        }else{

       

        if(args[0].endsWith("bots")){

        	

        	if(args[0].startsWith("+")){

        message.channel.send(`[+] J'ajoute le rôle **${toAdd.name}** à **${message.guild.members.filter(m => m.user.bot).size} membres**, un peu de patience, le bot a besoin de temps.`) 

        message.guild.members.filter(m => m.user.bot).map(members => members.addRole(toAdd.id)) 

        }

        

       	if(args[0].startsWith("-")){

        message.channel.send(`[-] Je retire le rôle **${toAdd.name}** à **${message.guild.members.filter(m => m.user.bot).size} membres**, un peu de patience, le bot a besoin de temps.`) 

        message.guild.members.filter(m => m.user.bot).map(members => members.removeRole(toAdd.id)) 

        }

        return;

       }

      } 

     } 

    } 

   
}

module.exports.help = {
    name: "role",
    description:"donne un rôle à quelqu'un",
    usage:"role <@mention | +members | +bots | -bots> <nom du role>",
    category:"modération"
}

module.exports.conf = {
  aliases:[]
}
