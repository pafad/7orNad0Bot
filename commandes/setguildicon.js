exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_SERVER")){
   message.channel.send(":x: tu n'as pas la permission de gérer le serveur")
  }else{
  if(!args){
    message.channel.send(":x: spécifiez une image à mettre en pp de serveur")
    }else{
message.guild.setIcon(args.join());
      }
    }
   }
}
