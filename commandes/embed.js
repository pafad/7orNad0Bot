module.exports.run = async (client, message, args) => {
    if(args.length < 1) return message.channel.send("tu n'as rien écrit.")
    message.delete();
    message.channel.send({
        embed:{ color: 0x030303,
        author:{ 
            name: message.author.tag,
            icon_url: message.author.avatarURL
        }, 
        description : args.join(" "),
        timestamp: new Date(),
        footer:{ 
            text: "embed ", 
            icon_url: client.user.avatarURL
            }
        }
    })
}

module.exports.help = {
    name: "embed",
    description:"le bot répète votre message dans un embed",
    usage:"embed/e <texte>",
    category:"fun"
}

module.exports.conf = {
    aliases:["e"]
  }