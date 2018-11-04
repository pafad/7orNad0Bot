module.exports.run = async (client, message, args) => {
message.channel.send({embed: {
    color: Math.floor(Math.random() * 16777214) + 1,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "Voici le serveur principal du bot.",
        value: "https://discord.gg/FFuMN4h"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© support by shiro"
    }
  }
});
}

module.exports.help = {
  name: "support",
  description:"lien du support",
  usage:"support/guilde",
  category:"support"
}

module.exports.conf = {
  aliases:["guilde"]
}