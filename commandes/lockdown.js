 exports.run = (client, message, args) => {
        let timeout = args[0]*1000
        var s = timeout/1000;
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
          message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} tu peux pas gérer le salon`)
          return;
        }else{
        message.channel.send(`<:7orNad0_check_mark:400045879958175745> channel bloqué pendant ${s} secondes`)
        message.channel.overwritePermissions(message.guild.id, {
                          SEND_MESSAGES: false
                        
        })
        setTimeout(() => {
                  message.channel.overwritePermissions(message.guild.id, {
                          SEND_MESSAGES: null
                  })
              message.channel.send(`<:7orNad0_check_mark:400045879958175745> channel débloqué.`)
              } ,timeout);
                       
             }
       }
