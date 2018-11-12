module.exports.run = async (client, message, args, opt) => {
    let fetched = opt.active.get(message.guild.id)

    if(!fetched) return message.channel.send(":x: La playlist est vide.")

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `__Joué maintenant :__\n**${nowPlaying.songTitle}** -- demandé par **${nowPlaying.requester}**\n\n__Queue__\n`;

    for(var i = 1; i < queue.length; i++){
        resp += `${i}. **${queue[i].songTitle}** -- Demandée par : **${queue[i].requester}**\n`
    }

    message.channel.send(resp);
}

module.exports.help = {
    name:"queue",
    description:"Montre la playlist du serveur",
    usage:"queue/q",
    description:"music"
}

module.exports.conf = {
    aliases:["q"]
}
