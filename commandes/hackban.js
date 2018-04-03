exports.run = (client, message, args) => {
if (!args){
  message.channel.send(":x: Spécifiez une id à bannir.");
}else{
    message.guild.ban(args).then(() => {
        message.channel.send("l'utilisateur `"+args.tag+" a été ban.`")
    })
}
}
