exports.run = (client, message, args) => {
message.channel.send({embed:{
                      color: 0x9101ff,
                       author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL,
      },
      title: '',
      url: '',
      fields: [
        {
          name: 'Liste des utilisateurs',
          value: `${message.guild.members.map(g => g.user.username)}\n`,
          inline: false
        },
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
             },
    }})
}