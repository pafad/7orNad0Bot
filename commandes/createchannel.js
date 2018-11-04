module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send(`:x: ${message.author} tu n'as pas la permission de gérer les salons`)
    }else{
      if(!args || args.length < 1){
         message.channel.send(`:x: ${message.author} Spécifiez le nom du channel.`)
         return;
    }else{
       message.guild.createChannel(args.join(" "), "text")
       message.channel.send(`:heavy_check_mark: Channel créé avec succès !`)
        }
      }
}

module.exports.help = {
    name: "createchannel",
    description:"le bot crée un channel textuel",
    usage:"createchannel/addchan <texte>",
    category:"modération"
  }

  module.exports.conf = {
    aliases:["addchan"]
  }