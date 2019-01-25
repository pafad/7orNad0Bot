const config = require("../config.json") 
const active = new Map();
module.exports = (client, oldMessage, newMessage) => {
if(newMessage.author.bot)return ;
if(newMessage.channel.type === "dm") return newMessage.channel.send("hm ?");

     //double arguments du turfu

    if(!newMessage.content.startsWith(config.prefix)) return ;

    

   let messageArray = newMessage.content.split(" ");

    let cmd = messageArray[0];

    let args = messageArray.slice(1);

  

    let opt = {

      OwnerID: config.adminID,

      active: active

    }

  

    let commandFile = client.commands.get(cmd.slice(config.prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(config.prefix.length)));

    if(commandFile){

      commandFile.run(client, newMessage, args, opt)

      console.log(`${moment(new Date).format('D-M-Y à HH:mm:ss')} : ${message.author.tag} a utilisé la commande ${cmd}`)

    }
} 
