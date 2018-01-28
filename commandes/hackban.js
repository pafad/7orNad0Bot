exports.run = (client, message, args) => {
if (!args){
  message.channel.send(":x: Spécifiez une id à bannir.");
}else{
    message.guild.ban(args).then(() => {
        message.channel.send("l'utilisateur `"+args+" a été ban.`")
    }).catch(err => {
        message.channel.send("L'id `"+args+"` n'est pas un utilisateur valide.");
    })
}
}
