 const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message, args) => {
	if(args) {
		   const afkUrl = process.env.afk;
            request(afkUrl, (err, res, body) => {
        
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var afk = JSON.parse(body)
                if(!afk[message.guild.id + message.author.id]) afk[message.guild.id + message.author.id] = {};
                if(!afk[message.guild.id + message.author.id].reason) afk[message.guild.id + message.author.id].reason = args.join(" ");
                if(!afk[message.guild.id + message.author.id].time) afk[message.guild.id + message.author.id].time = new Date().getTime() + 120000;
                
                message.reply(`Tu es maintenant en afk pour : **${args.join(" ")}**.`)
               }) 
		} else {
    const afkUrl = process.env.afk;
            request(afkUrl, (err, res, body) => {
        
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var afk = JSON.parse(body)
                if(!afk[message.guild.id + message.author.id]) afk[message.guild.id + message.author.id] = {};
                if(!afk[message.guild.id + message.author.id].reason) afk[message.guild.id + message.author.id].reason = "AFK";
                if(!afk[message.guild.id + message.author.id].time) afk[message.guild.id + message.author.id].time = new Date().getTime() + 120000;
                
                message.reply(`Tu es maintenant en afk pour : **AFK**.`)
               }) 
              }
} 

module.exports.help = {
name:"afk", 
description:"Tu défini ton statuts de afk", 
usage:"afk <texte>", 
category:"utility" 
} 

module.exports.conf = {
alliases:[] 
} 