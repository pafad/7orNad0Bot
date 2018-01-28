exports.run = (client, message, args) => {
   let input_chan = message.content.substr(14)
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} tu n'as pas la permission de gérer les salons`)
    }else{
      if(!input_chan){
         message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} Spécifiez le nom du channel.`)
         return;
    }else{
       message.guild.createChannel(input_chan, "text")
       message.channel.send(`<:7orNad0_check_mark:400045879958175745> Channel créé avec succès !`)
        }
      }
}