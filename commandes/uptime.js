module.exports.run = async (client, message) =>{
    var s = (Math.round(client.uptime / 1000) % 60)
    var m = (Math.round(client.uptime / (1000 * 60)) % 60)
    var h = (Math.round(client.uptime / (1000 * 60 * 60)))
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    message.channel.send('', { embed: {
      color:Math.floor(Math.random() * 16777214) + 1,
      author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL,
      },
      title: '',
      url: '',
      fields: [
        {
          name: `UpTime de ${client.user.tag}`,
          value: `${h} Heures ${m} Minutes ${s} Secondes`,
          inline: true
        },
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
      },
    }})
    }

module.exports.help = {
    name:"uptime",
    description:"le temps que le bot est connecté depuis son lancement",
    usage:"uptime",
    category:"info"
}

module.exports.conf = {
  aliases:[]
}