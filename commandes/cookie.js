module.exports.run = async (client, message, args) => {
  let usermention = message.mentions.users.first();
        if(!usermention){
            message.channel.send(`:x: ${message.author} veuillez spécifier un utilisateur.`)
            return;
        }else{
        message.channel.send(`:cookie: ${usermention} Tu as reçu un cookie de ${message.author}!`);       
    }
}

module.exports.help = {
    name: "cookie",
    description:"donne un cookie à quelqu'un",
    usage:"cookie @mention",
    category:"fun"
  }

  module.exports.conf = {
    aliases:[],
cooldown:3


  }
