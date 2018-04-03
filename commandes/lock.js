exports.run = (client, message, args) => {
       if(!message.guild.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("tu n'as pas la permissione de gérer le salon");
            message.channel.overwritePermissions({
                SEND_MESSAGES: false
       })
       message.channel.send("channel bloqué tape 7unlock pour le débloquer")
    
}
