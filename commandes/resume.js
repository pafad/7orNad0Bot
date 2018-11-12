module.exports.run = async (client, message, args, opt) => {
    let fetched = opt.active.get(message.guild.id)

    if(!fetched) return message.channel.send(":x: La playlist est vide.")
    
    if(message.guild.me.voiceChannel !== message.member.voiceChannel) return message.channel.send("Tu n'es pas dans le même channel vocal que moi.");

    if(!fetched.dispatcher.paused) return message.channel.send(":x: La musique n'est pas en pause.")

    fetched.dispatcher.resume();

    message.channel.send(`Je reprends la musique : **${fetched.queue[0].songTitle}**`)
}

module.exports.help = {
    name:"resume",
    description:"continue de jouer la playlist si elle est en pause",
    usage:"resume",
    category:"music"
}

module.exports.conf= {
    aliases:[]
}
