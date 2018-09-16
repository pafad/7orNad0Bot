module.exports.run = async (client,message, args) => {
  message.channel.send('', { embed: {
    color: 0x9101ff,
    title: "Tu veux m'inviter voici le lien:",
    url: '',
    description: `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=-1`,
    footer: {
      icon_url: client.user.avatarURL,
      text: `${client.user.username} by shiro`
    },
  }})
}

module.exports.help = {
  name: "invite"
}
