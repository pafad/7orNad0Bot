exports.run = (client, message) => {
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
  text: `serverinfo by shiro`
  },
  }})
  }
