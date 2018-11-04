const config = require("../config.json")
module.exports.run = async (client, message, args) => {
if(message.author.id !== config.adminID){
            message.channel.send(`:x: ${message.author} Tu n'es pas mon developpeur`)
            return;
        }else{
            message.channel.send("déconnection !")
            client.destroy();
    }
}

module.exports.help = {
    name: "die",
    description:"le bot se deconnecte",
    usage:"die",
    category:"owner"
  }
  
  module.exports.conf = {
    aliases:[]
  }