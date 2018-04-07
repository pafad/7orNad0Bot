exports.run = (client, message) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
          return;
        }else{
        if(message.channel.permissionOverwrites({'SEND_MESSAGES': null})){
        message.channel.send("le channel est déjà débloqué")
        }else{
        message.channel.overwritePermissions(message.guild.id,
                              {'SEND_MESSAGES': null
           })
           message.channel.send("channel débloqué")
           }
     }
