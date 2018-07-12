module.exports.run = async (client, message, args) => {
        let raison = message.content.substr(28);
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!message.member.hasPermissions("KICK_MEMBERS")){
            message.channel.send(`:x: ${message.author}, Tu n'as pas la permission de kick les membres.`)
            return;
        }else{
            if(!kickMember){
                message.channel.send(`:x: ${message.author}, veuillez mentionner un utilisateur.`)
                return;

          }else{
              if(!kickMember.kickable){
                  message.channel.send(`:x: ${message.author}, je peux pas kick cet utilisateur veuillez vérifier mes rôles et permissions.`)
                  return;
            }else{
                if(kickMember.hasPermission("ADMINISTRATOR")){
                    message.channel.send(`:x: ${message.author}, cet utilisateur est un admin, je peux pas faire ça.`)
                    return; 
                }else{
        message.delete(message.author);
        client.users.get(kickMember.id).send(`tu as été kick pour la raison: ${raison}`)
        message.guild.member(kickMember).kick({reason: `${raison}`});
        message.channel.sendMessage(`**${kickMember}** a été kick! raison:${raison}`);
                }
            }
        }
    }
}

module.exports.help = {
    name: "kick"
  }