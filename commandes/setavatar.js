const config = require("../config.json")
module.exports.run = async (client, message, args) => {
if (message.author.id === config.adminID) {
            client.user.setAvatar(args.join(" "))
            message.delete()
            message.channel.send(":bird L'avatar du bot est désormais: " + args.join(" "))
        } else {
            message.channel.send(`:bird: ${message.author} Tu n'es pas mon developpeur`)
        }
}

module.exports.help = {
    name: "setavatar",
    description:"modifier l'avatar du bot",
    usage:"setavatar <lien en format image>",
    category:"owner"
  }

  module.exports.conf = {
    aliases:[]
  }