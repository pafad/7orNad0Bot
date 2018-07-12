module.exports.run = async (client, message, args) => {
message.channel.send(`Nous sommes ${message.guild.members.size} membres !`)
}

module.exports.help = {
    name: "membres"
  }