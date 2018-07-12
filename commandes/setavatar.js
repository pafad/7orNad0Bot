module.exports.run = async (client, message, args) => {
if (message.author.id === "306119836503900161") {
            client.user.setAvatar(message.content.substr(11))
            message.delete()
            message.channel.send(":bird L'avatar du bot est désormais:" + message.content.substr(11))
        } else {
            message.channel.send(`:bird: ${message.author} Tu n'est pas mon developpeur`)
        }
}

module.exports.help = {
    name: "setavatar"
  }