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

      delete ban[args[0]] 

      request({ url: banUrl, method: 'PUT', json: ban})

      message.channel.send (`${args[0]} a été unban du bot.`) 

  return

      } 

  }else{

   message.channel.send("Tu n'es pas mon développeur ou un modo du bot.") 

  return;

  } 

  

})

}) 

} 

module.exports.help = {

name:"globalunban", 

description:"unban un utilisateur du bot et des serveurs", 

usage:"globalunban/gunban <id>", 

category:"owner" 

} 

module.exports.conf = {

aliases:["gunban"] 

} 
