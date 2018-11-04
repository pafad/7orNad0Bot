module.exports.run = async (client, message, args) => {
        let raison = args.join(" ").slice(18);
        let kickMember = message.mentions.members.first();
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
        client.users.get(kickMember.id).send(`Tu as été kick pour la raison: ${raison}`)
        message.guild.member(kickMember).kick({reason: `${raison}`});
        message.channel.sendMessage(`**${kickMember}** a été kick! raison:${raison}`);
                }
            }
        }
    }
}

module.exports.help = {
    name: "kick",
    description:"kick un utilisateur",
    usage:"kick @mention <texte>",
    category:"modération"
  }

  module.exports.conf = {
    aliases:[]
  }