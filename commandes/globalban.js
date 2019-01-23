const superagent = require("superagent") 
const request = require("request") 

module.exports.run = async (client, message, args, opt) => {
 const modUrl = process.env.mods;

            request(modUrl, (err, res, body) => {

                

                console.log('chargement !')

                

                if(err || res.statusCode!== 200)return

                

                console.log('chargé avec succés')

                var mods = JSON.parse(body)
 	
	    	const banUrl = process.env.ban;
    
    request(banUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let ban = JSON.parse(body);  
  
if(message.author.id == opt.OwnerID || mods[message.author.id]){
if(!args){
	message.channel.send("utilisateur introuvable")  
    return;
   }else{
      if(!ban[args[0]]) ban[args[0]] = {} 
      if(!ban[args[0]].raison) ban[args[0]].raison = args.slice(1).join(" ") 
      request({ url: banUrl, method: 'PUT', json: ban})
      message. channel. send (`${args[0]} a été ban du bot pour: ${args.slice(1).join(" ")}`) 
  return
      } 
  }else{
   message. channel. send("tu n'es pas mon développeur") 
  return;
  } 
  
})

}) 
} 

module.exports.help = {
name:"globalban", 
description:"ban un utilisateur du bot et des serveurs", 
usage:"globalban/gban <id> <raison>", 
category:"owner" 
} 

module.exports.conf = {
aliases:["gban"] 
} 
