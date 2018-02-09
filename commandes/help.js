exports.run = (client, message, args) => {
    message.channel.send('', { embed: {
      color: 0x9101ff,
      author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL,
      },
      title: 'voici les commandes. coucou yazid !',
      url: '',
      description: `:gear: -> __Commandes pour le developpeur__\n\n`+
                    `7die, 7setavatar, 7restart, 7eval\n`+
                    `:gear: -> __Commandes de modérations__\n\n`+
                    `7ban, 7kick, 7lockdown, 7createrole, 7createvoice, 7createchannel, 7purge, 7setnick\n`+
                    `:gear: -> Commandes informations\n\n`+
                    `7serverinfo, 7uptime\n`+
                    `:gear: -> Commandes useless c:\n\n`+
                    `7roll`,
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
      },
    }})
}
