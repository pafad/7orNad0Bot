const Tatsu = require("tatsu.js");
module.exports.run = async (client, message, args) => {
 

   var tatsu = new Tatsu(process.env.tatsu);

   var mention = message.mentions.members.first();

   

   if(!mention){

   	   tatsu.getUser(message.author.id).then(user => {

   	message.channel.send({embed:{

   	color:0x010101,

   	author:{

   	name:"Profile tatsumaki de : " +user.name, 

   	icon_url:message.author.avatarURL

   	}, 

   	fields:[{

    name:"Titre :", 

    value:user.title

    },

    {

    	name:"Rang :", 

    	value:user.rank

    	}, 

    {

    	name:"Level:", 

    value:user.level

    	}, 

    {

    	name:"XP:", 

    	value:`${user.total_xp} (${user.next_level_xp - user.level_xp} Avant le prochain niveau.)`

    	}, 

    	{

    	name:"Crédits :",

    	value:user.credits 

    	},

    	{

    	name:"Points de réputation :", 

    	value:user.reputation

    	}, 

    	{

    	name:"Info box :", 

    	value:user.info_box

    	} 

    	],

    	timestamp:new Date(), 

    	footer:{

    	icon_url:client.user.avatarURL,

    	text:"Tatsumaki" 

    	} 

    	}}) 

    	

    }, err => {

    console.error(err);

    })

    

    

    }else{

    	

   tatsu.getUser(mention.user.id).then(user => {

   	message.channel.send({embed:{

   	color:0x010101,

   	author:{

   	name:"Profile tatsumaki de : " +user.name, 

   	icon_url:mention.user.avatarURL

   	}, 

   	fields:[{

    name:"Titre :", 

    value:user.title

    },

    {

    	name:"Rang :", 

    	value:user.rank

    	}, 

    {

    	name:"Level:", 

    value:user.level

    	}, 

    {

    	name:"XP:", 

    	value:`${user.total_xp} (${user.next_level_xp - user.level_xp} Avant le prochain niveau.)`

    	}, 

    	{

    	name:"Crédits :",

    	value:user.credits 

    	},

    	{

    	name:"Points de réputation :", 

    	value:user.reputation

    	}, 

    	{

    	name:"Info box :", 

    	value:user.info_box

    	} 

    	],

    	timestamp:new Date(), 

    	footer:{

    	icon_url:client.user.avatarURL,

    	text:"Tatsumaki" 

    	} 

    	}}) 

    	

    }, err => {

    console.error(err);

    })

    
} 
    	} 

module.exports.help = {
name:"tatsumaki", 
description:"donne les infos de ton compte tatsumaki", 
usage:"tatsumaki/tatsu <@mention>", 
category:"utility" 
} 

module.exports.conf = {
 aliases:["tatsu"] 
} 
