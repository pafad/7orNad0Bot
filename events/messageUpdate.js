const config = require("../config.json") 
module.exports = (client, oldMessage, newMessage) => {
if(newMessage.author.bot)return ;
if(newMessage.channel.type === "dm") return message.channel.send("hm ?");

     //double arguments du turfu

    if(!newMessage.content.startsWith(prefix)) return ;

    

   let messageArray = newMessage.content.split(" ");

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
