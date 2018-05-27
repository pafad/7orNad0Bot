exports.run = (client, message) => {
message.channel.send("Pong !")
        setTimeout(() => {
            message.channel.lastMessage.edit(`:ping_pong: __${Math.round(message.author.client.ping + client.ping)}__ ms !`)
        }, 600);
}
