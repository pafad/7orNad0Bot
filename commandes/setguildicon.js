exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_SERVER") return message.channel.send(":x: tu n'as pas la permission de gérer le serveur")
  if(args.length < 1){
    message.channel.send(":x: spécifiez une image à mettre en pp de serveur")
    }
message.guild.setIcon(args.join());
}
