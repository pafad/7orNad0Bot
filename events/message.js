const config = require("../config.json")
var prefixes = ["%", "xeno ", "Xeno ", "<@532665077522759680> "] 
const moment = require("moment");
const active = new Map();

module.exports = async (client, message) => {
    //blacklist du bot
   
    if(message.author.bot)return;
    
    if(message.channel.type === "dm") return message.channel.send("hm ?");
     //double arguments du turfu
    let prefix;
    for(var i in prefixes){
        
        if (message.content.startsWith(prefixes[0])) prefix = prefixes[0]
         
}
  
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
