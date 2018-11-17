const config = require("../config.json")
let prefix = config.prefix
const moment = require("moment");
const db = require("quick.db");
const active = new Map();

module.exports = async (client, message) => {
    //blacklist du bot
    if(message.author.bot)return;
    
    if(message.channel.type === "dm") return message.channel.send("hm ?");
     //double arguments du turfu
    db.add(`GlobalMessages_${message.author.id}`, 1);

    db.add(`GuildMessages_${message.guild.id}${message.author.id}`, 1);

    let fetched = await db.fetch(`prefix_${message.guild.id}`);
    if(fetched === null) prefix = config.prefix;
    else prefix = fetched;
    if(!message.content.startsWith(prefix))return;
  
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