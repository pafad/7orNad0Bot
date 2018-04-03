exports.run = (client, message) => {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "Voici le serveur principal du bot.",
        value: "https://discord.gg/pTkDXnk"
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
