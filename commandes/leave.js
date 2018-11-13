module.exports.run = async (client, message, args, opt) => {

    if(!message.member.voiceChannel) return message.channel.send("Tu n'es pas dans un channel vocal.");

    if(!message.guild.me.voiceChannel) return message.channel.send("Je ne suis pas dans un channel vocal.");

    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Tu n'es pas dans le même channel vocal que moi.")

    message.guild.me.voiceChannel.leave();
    
    let fetched = opt.active.get(message.guild.id)
    
     fetched.dispatcher.end();

    message.channel.send("Je quitte le channel vocal...")

}

module.exports.help = {
    name:"leave",
    description:"quitte le channel vocal",
    usage:"leave",
    category:"music"
}

module.exports.conf = {
    aliases:[]
}
