const config = require("../config.json")
const moment = require("moment");
const prefix = config.prefix;
const active = new Map();
const superagent = require("superagent")
const request = require("request")
const authors = [];
var warned = [];
var banned = [];
var messagelog = []; 
const warnBuffer = 3;
const maxBuffer = 5; 
const interval = 500; 
const warningMessage = "stop spam ou je te coupe la tête. Ou demande à l'admin de faire un rôle `bypass`."; 
const banMessage = "a été ban pour spam, à qui le tour ?"; 
const maxDuplicatesWarning = 7;  
const maxDuplicatesBan = 10;
const deleteMessagesAfterBanForPastDays = 7; 
const exemptRoles = ["bypass"] 
const exemptUsers = ["'./ 〄ḟεḯ⊥∀η〄◢◤#6666"] 


module.exports = async (client, message) => {
     if (message.author.bot) return; 
    //anti raid
   
   const antispamurl = process.env.antispam; 
   		 	
  request(antispamurl, (err, res, body) => { 
   				
  console.log('chargement !') 
   				
  if(err || res.statusCode!== 200) return
   				
  console.log('chargé avec succés') 
   				 
  var antispam = JSON.parse(body)
   			 


  
  if(!antispam[message.guild.id]) return; 
  
  if(message.member && message.member.roles.some(r => exemptRoles.includes(r.name))) return; 
  
  if(exemptUsers.includes(message.author.tag)) return; 
  
  if ( (message.author.id != client.user.id) && message.channel.guild) { 
  	
  	var now = Math.floor(Date.now()); 
  	
  	authors.push({ "time": now, "author": message.author.id }); 
  	
  	messagelog.push({ "message": message.content, "author": message.author.id }); 
  	
  	var msgMatch = 0; 
  	
  	for (var i = 0; i < messagelog.length; i++) { 
  		
  		if (messagelog[i].message == message.content && (messagelog[i].author == message.author.id) && (message.author.id !== client.user.id)) { 
  			
  			msgMatch++; 
  			
  			} 
  			
  			} 
  			
  			if (msgMatch == maxDuplicatesWarning && !warned.includes(message.author.id)) { 
  				
  				warn(message, message.author.id); 
  				
  				} 
  				
  				if (msgMatch == maxDuplicatesBan && !banned.includes(message.author.id)) { 
  					
  					ban(message, message.author.id); } 
  					
  					var matched = 0; 
  					
  					for (var i = 0; i < authors.length; i++) { 
  						
  						if (authors[i].time > now - interval) { 
  							
  							matched++; 
  							
  							if (matched == warnBuffer && !warned.includes(message.author.id)) { 
  								
  								warn(message, message.author.id); 
  								
  								} else if (matched == maxBuffer) { 
  									
  									if (!banned.includes(message.author.id)) { 
  										
  										ban(message, message.author.id); 
  										
  										} 
  										
  										} 
  										
  										} else if (authors[i].time < now - interval) { 
  											
  											authors.splice(i); 
  											
  											warned.splice(warned.indexOf(authors[i])); 
  											
  											banned.splice(warned.indexOf(authors[i])); 
  											
  											} 
  											
  											if (messagelog.length >= 200) { 
  												
  												messagelog.shift(); 
  												
  												} 
  												
  												} 
  												
  												} 
  											
  												
  												function warn(message, userid) { 
  													
  													warned.push(message.author.id); 
  													
  													message.channel.send(message.author+ " " + warningMessage); 
  													
  													}
  													
  													function ban(message, userid) { 
  														
  														for (var i = 0; i < messagelog.length; i++) { 
  															
  															if (messagelog[i].author == message.author.id) { 
  																
  																messagelog.splice(i); 
  																
  																} 
  																
  																} 
  																
  																banned.push(message.author.id); 
  																
  																var user = message.channel.guild.members.find(member => member.user.id === message.author.id); 
  																
  																if (user) { 
  																	
  																user.ban(deleteMessagesAfterBanForPastDays).then((member) => { 
  																	
  																	message.channel.send(`**${message.author.tag}**` + " " +banMessage); 
  																	
  																	return true; 
  																	
  																	}).catch(() => { 
  																		
  																	message.channel.send("Je n'ai pas la permission de kick " + message.author + " pour spam."); 
  																	
  																	return false; 
  																	
  																
  																	
  																	
  																	})
  																	}
  																	}
  															 	})	
          
    
    //blacklist du bot
   
    if(message.author.bot)return;
    
    if(message.channel.type === "dm") return message.channel.send("hm ?");
     //double arguments du turfu
    if(!message.content.startsWith(prefix)) return ;
    
   let messageArray = message.content.split(" ");

    let cmd = messageArray[0];

    let args = messageArray.slice(1);

  

    let opt = {

      OwnerID: config.adminID,

      active: active

    }

  

    let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));

    if(commandFile){

      commandFile.run(client, message, args, opt)

      console.log(`${moment(new Date).format('D-M-Y à HH:mm:ss')} : ${message.author.tag} a utilisé la commande ${cmd}`)

    }
    
   } 
