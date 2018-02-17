exports.run = (client, message, args) => {
message.channel.send(`Nous sommes ${message.guild.members.size} membres !`)
}
