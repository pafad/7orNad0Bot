exports.run = (message, client, send) => {
   let input_vchan = message.content.substr(12)
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} tu n'as pas la permission de gérer les salons`)
    }else{
      if(!input_vchan){
         message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} Spécifiez le nom du channel.`)
         return;
    }else{
       message.guild.createChannel(input_vchan, "voice")
       message.channel.send(`<:7orNad0_check_mark:400045879958175745> Channel créé avec succès !`)
        }
      }
}
