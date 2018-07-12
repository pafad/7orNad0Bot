module.exports.run = async (client, message) => {
message.channel.send("Pong !")
        setTimeout(() => {
            message.channel.lastMessage.edit(`:ping_pong: __${Math.round(message.author.client.ping + client.ping)}__ ms !`)
        }, 600);
}

module.exports.help = {
        name: "ping"
}
