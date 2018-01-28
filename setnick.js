exports.run = (client, message, args) => {
     let user_setnick = message.mentions.users.first();
    if(!message.member.hasPermission("MANAGE_NICKNAMES")){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} tu n'as pas la permission de gérer les pseudo"`)
        return;
    }else{
    if(!user_setnick){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> Veuillez mentionner un utilisateur`)
        return;
    }else{
       message.guild.members.get(user_setnick.id).setNickname(message.content.substr(31))
        message.channel.send(`<:7orNad0_check_mark:400045879958175745> pseudo changé ! nouveau pseudo: ${message.content.substr(32)}`)
        }
    }
}