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
          name: 'Liste des serveurs',
          value: `${client.guilds.map(g => g.name + `[${g.members.size} membres]\n` +`[id: ${g.id}]\n\n`)}`,
          inline: false
        },
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
             },
    }})
  }