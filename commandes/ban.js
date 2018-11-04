module.exports.run = async (client,message,args) => {
    let raison = args.join(" ").slice(18)
    let banMember = message.mentions.members.first();
    if(!message.member.hasPermissions("BAN_MEMBERS")){
        message.channel.send(`:x: ${message.author} Tu n'as pas la permission de ban les membres.`);
        return;
    }else{
        if(!banMember){
            message.channel.send(":x: Mentionne un utilisateur.")
            return;
        }else{
          if(!banMember.bannable){
              message.channel.send(`:x: ${message.author} je peux pas kick cet utilisateur veuillez vérifier mes rôles et permissions.`);
              return;
        }else{
            if(banMember.hasPermission("ADMINISTRATOR")){
                message.channel.send(`:x: ${message.author} cet utilisateur est un admin, je peux pas faire ça.`);
                return; 
            }else{
    message.delete(message.author);
    banMember.send(`tu as été ban pour la raison: ${raison}`);
    message.guild.member(banMember).ban({reason: `${raison}`});
    message.channel.sendMessage(`**${banMember}** a été ban! raison:${raison}`);
                }
            }
        }
    }
}
module.exports.help = {
    name: "ban",
    description:"bannir un utilisateur du serveur en question",
    usage:"ban @mention <raison>",
    category:"modération"
}

module.exports.conf = {
    aliases:[]
  }