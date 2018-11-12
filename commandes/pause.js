module.exports.run = async (client, message, args, opt) => {
    let fetched = opt.active.get(message.guild.id)

    if(!fetched) return message.channel.send(":x: La playlist est vide.")
    
    if(message.guild.me.voiceChannel !== message.member.voiceChannel) return message.channel.send("Tu n'es pas dans le même channel vocal que moi.");

    if(fetched.dispatcher.paused) return message.channel.send(":x: La musique est déjà en pause.");

    fetched.dispatcher.pause();

    message.channel.send(`Musique en pause sur : ** ${fetched.queue[0].songTitle}**`)

}

module.exports.help = {
    name:"pause",
    description:"pause la musique",
    usage:"pause",
    category:"music"
}

module.exports.conf = {
    aliases:[]
}
