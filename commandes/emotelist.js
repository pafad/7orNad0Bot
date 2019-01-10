module.exports.run = async (client, message) => {
    if(message.guild.emojis.size == 0) return message.channel.send(":x: Il n'y a pas d'emojis dans ce serveur") 
    message.channel.send({embed:{
      color: 0x9101ff,
       author: {
  name: message.author.tag,
  icon_url: message.author.avatarURL,
  },
  title: `${message.guild.name}`,
  url: '',
  fields: [
  {
  name: ':gear: -> liste de rôles',
  value: message.guild.emojis.map(e => e.toString()).join(" "),
  inline: false
  },
  ],
  footer: {
  icon_url: client.user.avatarURL,
  text: `emotelist by shiro`
  },
  }})
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
