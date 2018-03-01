exports.run = (client,message) => {
  message.channel.send('', { embed: {
    color: 0x9101ff,
    title: "Tu veux m'inviter voici le lien:",
    url: '',
    description: "https://discordapp.com/oauth2/authorize?client_id=360768316832481284&scope=bot&permissions=-1",
    footer: {
      icon_url: client.user.avatarURL,
      text: `${client.user.username} by shiro`
    },
  }})
}
