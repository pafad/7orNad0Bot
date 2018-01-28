exports.run = (client, message, args)  => {
        let raison = message.content.substr(26);
        let banMember = message.guild.member(message.mentions.users.first());
        if(!message.member.hasPermissions("BAN_MEMBERS")){
            message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} Tu n'as pas la permission de ban les membres.`)
            return;
        }else{
            if(!banMember){
                message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} veuillez mentionner un utilisateur.`)
                return;

          }else{
              if(!banMember.bannable){
                  message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} je peux pas kick cet utilisateur veuillez vérifier mes rôles et permissions.`)
                  return;
            }else{
                if(banMember.hasPermission("ADMINISTRATOR")){
                    message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} cet utilisateur est un admin, je peux pas faire ça.`)
                    return; 
                }else{
        message.delete(message.author);
        message.guild.member(banMember).ban({reason: `${raison}`});
        message.channel.sendMessage(`<:7orNad0_check_mark:400045879958175745> ${banMember} a été ban! raison:${raison}`);
                }
            }
          }
       }
    }