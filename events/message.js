const config = require("../config.json")
const prefix = config.prefix
const moment = require("moment")

module.exports = async (client, message) => {
    //blacklist du bot
    if(message.author.bot)return;
    if(message.channel.type === "dm") return message.channel.send("hm ?");
     //double arguments du turfu
    if(!message.content.startsWith(prefix))return;
  
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
  
    let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if(commandFile){
      commandFile.run(client, message, args)
      console.log(`${moment(new Date).format('D-M-Y à HH:mm:ss')} : ${message.author.tag} a utilisé la commande ${cmd}`)
    }
}
