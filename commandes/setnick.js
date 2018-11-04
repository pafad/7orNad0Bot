module.exports.run = async (client, message, args) => {
     let user_setnick = message.mentions.users.first();
    if(!message.member.hasPermission("MANAGE_NICKNAMES")){
        message.channel.send(`:x: ${message.author} tu n'as pas la permission de gérer les pseudo"`)
        return;
    }else{
    if(!user_setnick){
        message.channel.send(`Veuillez mentionner un utilisateur`)
        return;
    }else{
       message.guild.members.get(user_setnick.id).setNickname(args.join(" "))
        message.channel.send(`pseudo changé ! nouveau pseudo: ${args.join(" ")}`)
        }
    }
}

module.exports.help = {
    name: "setnick",
    description:"change le surnom de l'utilisateur",
    usage:"setnick/rename @mention <pseudo>"
  }

  module.exports.conf = {
    aliases:["rename"]
  }