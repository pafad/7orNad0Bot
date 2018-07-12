module.exports.run = async (client, message, args)  => {
        let raison = args[1];
        let banMember = message.guild.member(message.mentions.users.first());
        if(!message.member.hasPermissions("BAN_MEMBERS")){
            message.channel.send(`:x: ${message.author} Tu n'as pas la permission de ban les membres.`);
            return;
        }else{
            if(!banMember){
                var toBan = client.users.find("username", args[0]);
                message.guild.ban(toBan).then(() => {
                message.channel.send("**"+toBan.tag+"** a été ban.`");
                })
                return;
            if(!toBan){
                var toBanId = client.users.find("id", args[0]);
                message.guild.ban(`${toBanId}`).then(() => {
                message.channel.send("**"+toBanId.tag+"** a été ban.");
                return;
                })
                return;
                if(!toBan || toBanId){
                message,channel.send("je ne trouve pas cet utilisateur.");
                return;
            }
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
        client.users.get(kickMember.id).send(`tu as été ban pour la raison: ${raison}`);
        message.guild.member(banMember).ban({reason: `${raison}`});
        message.channel.sendMessage(`**${banMember}** a été ban! raison:${raison}`);
                }
            }
          }
       }
    }
}
    module.exports.help = {
        name: "ban"
      }