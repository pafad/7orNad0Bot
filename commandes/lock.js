exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission de gérer le salon");
          message.channel.overwritePermissions({
        SEND_MESSAGES: false
    })
message.channel.send("channel bloqué tape 7unlock pour le débloquer")   
}
