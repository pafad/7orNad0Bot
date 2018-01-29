exports.run = (client, message, args) => {
    const config = require("./config")
        if (message.author.id == "306119836503900161") {
            message.channel.send(`:gear: -> redémarrage...`);
          client.destroy();
            console.log("déconnection")
            client.login(process.env.Discord_token || process.argv[2]);
            console.log("redémarrage")
            console.log(`${clien.user.tag} connecté !`)
  }else{
    message.channel.send(`:x: ${message.author} tu n'est pas mon developpeur.`)
  }
}
