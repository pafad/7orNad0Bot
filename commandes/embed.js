module.exports.run = async (client, message, args) => {
    if(args.length < 1) return message.channel.send("tu n'as rien écrit.")
    message.delete();
    message.channel.send({
        embed:{ color: 0x030303,
        author:{ 
            name: message.author.tag,
            icon_url: message.author.avatarURL
        }, 
        description : message.content.substr(7),
        timestamp: new Date(),
        footer:{ 
            text: "embed ", 
            icon_url: client.user.avatarURL
            }
        }
    })
}

module.exports.help = {
    name: "embed"
}
