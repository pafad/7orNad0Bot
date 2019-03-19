const config = require("../config.json")
module.exports.run = async (client, message, args) =>{
  if(message.author.id !== config.adminID){
      message.reply("T'es pas mon maître alors chut.")
      return;
    }else{
      message.reply("Coucou mon petit maître !");
    }
}

module.exports.help = {
  name: "master",
  description:"Le bot dit si t'es son maître",
  usage:"master/maitre",
  category:"fun"
}

module.exports.conf = {
  aliases:["maitre"],
cooldown:3
}
