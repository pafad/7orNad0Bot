module.exports.run = async (client, message) => {
    if(message.guild.emojis.size == 0) return message.channel.send(":x: Il n'y a pas d'emojis dans ce serveur") 
    message.channel.send(message.guild.emojis.map(e => e).join(" "))) 
  }

  module.exports.help = {
    name: "emotelist",
    description:"liste des emojis du serveur",
    usage:"emotelist/elist",
    category:"info"
  }

  module.exports.conf = {
    aliases:["elist"]
  }
