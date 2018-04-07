exports.run = (client, message) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
          return;
        }else{
        message.channel.overwritePermissions(message.guild.id,
                              {'SEND_MESSAGES': null
           })
           message.channel.send("channel débloqué")
           }
     }
