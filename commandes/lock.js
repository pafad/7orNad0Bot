exports.run = (client, message) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send("Tu n'as pas la permission de gérer le salon");
    }else{
    message.channel.overwritePermissions(message.guild.id,
         {'SEND_MESSAGES': false    
    })
        message.channel.send("channel bloqué tape 7unlock pour le débloquer")
        } 
    }
}
