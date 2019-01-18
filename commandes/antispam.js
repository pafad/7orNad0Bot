const superagent = require("superagent"); 
const request = require("request"); 
 		

module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")){
   		
   		message.channel.send("Tu n'as pas la permission administrateur.")
   		return; 
   		
   		}else{
   	if(!args){
   		
   		message.channel.send("Spécifie `enable` ou `disable`")
   		return; 
   		
   	}else{
   		
   		if(args[0] === "enable"){
   			
   			const antispamurl = process.env.antispam; 
   		 	
   			request(antispamurl, (err, res, body) => { 
   				
   				console.log('chargement !') 
   				
   				if(err || res.statusCode!== 200)return
   				
   				 console.log('chargé avec succés') 
   				 
   				 var antispam = JSON.parse(body)
        
   				 if(antispam[message.guild.id]) return message.channel.send("l'anti-spam est déjà actif.")
       
   				 if(!antispam[message.guild.id]) antispam[message.guild.id] = {}
   				 
   				 if(!antispam[message.guild.id].boonlean) antispam[message.guild.id].boonlean = true; 
   				 
   				 antispam[message.guild.id].boonlean = true; 
   				 
   				 request({ url: antispamurl, method: 'PUT', json: antispam})
   				 
   				 })
   				 
   				 message.channel.send("anti-spam activé !")
   				 
   			}//fin de enable
   			
   			if(args[0] === "disable"){
   				
   				const antispamurl = process.env.antispam; 
   		 	
   			request(antispamurl, (err, res, body) => { 
   				
   				console.log('chargement !') 
   				
   				if(err || res.statusCode!== 200)return
   				
   				 console.log('chargé avec succés') 
   				 
   				 var antispam = JSON.parse(body)
   				 
   				 if(antispam[message.guild.id]){
         delete antispam[message.guild.id]
         
   				 
   				 request({ url: antispamurl, method: 'PUT', json: antispam})
         }else{
          message.channel.send("l'anti-spam est déjà désactivé." )
          return ; 
          }
                               
   				 })
   				 
   				 message.channel.send("anti-spam desactivé !")
   			
   				}//fin de disable
   				
   	 	}//fin de args
   	 	
   		}//fin de perms
   		
   }//fin de message
   
   module.exports.help = {
   name: "antispam",
   description: "activer ou désactiver la fonction anti-spam",
   usage:"anti-spam/as <enable/disable>",
   category: "modération"
   }
   
   module.exports.conf = {
   aliases:["as"]
   }
