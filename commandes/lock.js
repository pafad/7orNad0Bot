exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS"){
    message.channel.send("tu n'as pas la perm")   
    }else{
     message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })   
    }
}
