module.exports.run = async (client, message, args) => {
  message.channel.send(`Nous sommes ${message.guild.members.size} membres !`)
}

module.exports.help = {
    name: "membres",
    description:"Le bot dit combien on est de membres",
    usage:"membres/members",
    category:"info"
  }

  module.exports.conf = {
    aliases:["members"],
cooldown:3
  }
