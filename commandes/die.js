module.exports.run = async (client, message, args) => {
if(message.author.id !== '306119836503900161'){
            message.channel.send(`:x: ${message.author} Tu n'est pas mon developpeur`)
            return;
        }else{
            message.channel.send("déconnection !")
            client.destroy();
    }
}

module.exports.help = {
    name: "die"
  }