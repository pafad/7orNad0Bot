exports.run = (client, message, args) => {
    if(args.length > 1) return message.channel.send("tu n'as rien écrit.")
    message.delete();
    message.channel.send('', {embed:{
    author:{
    name: message.author.tag,
    icon_url: message.author.avatarURL
    },
    description : args.join(),
    footer:{
    text: "embed",
    timestamp: Date.now()
    }
    })
}
