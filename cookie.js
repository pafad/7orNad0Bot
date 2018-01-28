exports.run = (client, message, args) => {
  let usermention = message.mentions.users.first();
        if(!usermention){
            message.channel.send(`:x: ${message.author} veuillez spécifier un utilisateur.`)
            return;
        }else{
        message.channel.sendMessage(`:cookie: ${usermention} Tu as reçu un cookie de ${message.author}!`);
        console.log("Coooooooooooookie !")        
    }
}
