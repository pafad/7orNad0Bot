exports.run = (client, message, args) => {
        let raison = message.content.substr(28);
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!message.member.hasPermissions("KICK_MEMBERS")){
            message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author}, Tu n'as pas la permission de kick les membres.`)
            return;
        }else{
            if(!kickMember){
                message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author}, veuillez mentionner un utilisateur.`)
                return;

          }else{
              if(!kickMember.kickable){
                  message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author}, je peux pas kick cet utilisateur veuillez vérifier mes rôles et permissions.`)
                  return;
            }else{
                if(kickMember.hasPermission("ADMINISTRATOR")){
                    message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author}, cet utilisateur est un admin, je peux pas faire ça.`)
                    return; 
                }else{
        message.delete(message.author);
        message.guild.member(kickMember).kick({reason: `${raison}`});
        message.channel.sendMessage(`<:7orNad0_check_mark:400045879958175745> ${kickMember} a été kick! raison:${raison}`);
                }
            }
        }
    }
}
