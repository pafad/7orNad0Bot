const translate = require("@k3rn31p4nic/google-translate-api");

module.exports.run = async (client, message, args) => {

 			let translatelanguage = args[0];
    if(!translatelanguage) return message.channel.send("Entre le langage.\nEx: ``=translate fr ¿Holà, que tal?``");

    let translatetext = args.slice(1).join(" ");
    if(!translatetext) return message.channel.send("Entre le message à traduire.\nEx: ``=translate fr ¿Holà, que tal?``");

    message.channel.send(`${client.emojis.find("name", "typing")}Traduction...`).then((m) => {

        translate(translatetext, {to: translatelanguage}).then(res => {

            m.edit({embed:{
            	author:{
            		icon_url:message.author.avatarURL,
            		name:"Traduction"
            		}, 
             color:0xff0000,
             fields:[{
             	name:"Entrée", 
             value:translatetext
             },
             {
             	name:"Sortie", 
             value:res.text
             }], 
             timestamp:new Date(), 
             footer:{
             	icon_url:bot.user.avatarURL, 
             	text:"Translate" 
             	}
             	}}) 

            
        }).catch(err => {
            
            return m.edit("Entre un langage validé.");

        });

    });

}

module.exports.help = {
name:"translate",
description:"traduit le message",
usage:"translate <langue> <texte>",
category:"utility"
} 

module.exports.conf = {
aliases:[]
} 
