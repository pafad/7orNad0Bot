const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message, args, opt) => {
    const modUrl = process.env.mods;
            request(modUrl, (err, res, body) => {
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var mods = JSON.parse(body)
                let usermention = message.mentions.users.first();
                if(message.author.id !== opt.OwnerID){
                message.channel.send(":x: Tu n'es pas mon développeur.") 
                return;
               }else{
                if(!usermention){
                message.channel.send(":x: mentionne quelqu'un.") 
                return ;
               }else{
               if(!mod[usermention.id]) mod[usermention.id] = {} 
               request({ url: modUrl, method: 'PUT', json: mods})
               message.channel.send(`**${usermention.tag}** est désormais un modérateur du bot !") 
              } 
             } 

               }) 
               
} 

module.exports.help = {
name:"addmod", 
description:"Ajouter des modérateurs au bot",
usage:"addmod <mention>", 
category:"owner" 
} 

module.exports.conf = {
aliases:[] 
} 
