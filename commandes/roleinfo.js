const moment = require("moment") 

const sm = require("string-similarity") 

module.exports.run = async (client, message, args) => {

if(!args) return message.channel.send(":x: Entre un nom de rôle valide.") 

let roles = [];

        let indexes = [];

        message.guild.roles.forEach(function(role){

            roles.push(role.name)

            indexes.push(role.id)

        })

        let match = sm.findBestMatch(args.join(" "), roles);

        let rolename = match.bestMatch.target;

        let toMention = message.guild.roles.get(indexes[roles.indexOf(rolename)])

        

        let toInfo = message.guild.roles.find("name", args.join(" ")) || message.guild.roles.find("id", args.join(" ")) || toMention ;

        if(!toInfo){

       message.channel.send(":x: Je ne trouve pas ce rôle.") 

       return;

      }else{

      	

      	var filtre = m => m.roles.find("name", toInfo.name)

      	

      	message.channel.send({embed:{

      		

      	color:toInfo.color, 

      	

      	fields:[{

      		

      	name:"Nom du rôle:", 

      	

      	value:toInfo.name

      	

      	}, 

      	

      	{

      		

      	 name:"ID:", 

      	 

      	 value:toInfo.id

      	 

      	},

      	

      	{

      	

      	name:"Créé le:", 

      	

      	value:moment(toInfo.createdAt).format("DD/MM/YY à hh:mm:ss") 

      		

      	}, 

      	

      	{

      		

      	name:"Couleur:", 

      	 

      	value:toInfo.hexColor == "#000000" ? "Couleur par défaut (transparent)" : toInfo.hexColor 

      	 

      	},

      	

     		{

      		

      	name:"Afficher les membres ayant ce rôle séparément en ligne:", 

      	 

      	value:toInfo.hoist == false ? "Non" : "Oui" 

      	 

      	}, 

      	

      	{

      		

      	name:"Position:", 

      	 

      	value:toInfo.position == 0 ? "Rôle @everyone" : toInfo.position

      	 

      	},

      	

      	{

      		

      	name:"Mentionnable:", 

      	 

      	value:toInfo.mentionable == false ? "Non" : "Oui" 

      	 

      	}, 

      	

      	{

      		

      	name:"Nombre de membres ayant ce rôle", 

      	 

      	value:`${message.guild.members.filter(filtre).size} (${(message.guild.members.filter(filtre).size / message.guild.members.size) * 100}%)`

      	 

      	}

      		

      	],

      	

      	timestamp:new Date(), 

      	

      	footer:{

      		

      	icon_url:client.user.avatarUrl, 

      	

      	text:"roleinfo" 

      	

      	} 

      	

      	}}) 

      	

      	} 
} 

module.exports.help = {

name:"roleinfo", 
description:"voir les info du rôle souhaité",
usage:"roleinfo/ri <rôle>", 
category:"info" 

}

module.exports.conf = {
aliases:["ri"] ,
cooldown:3
} 
