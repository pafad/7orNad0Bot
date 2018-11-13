module.exports.run = async (client, message, args) => {

    if(!message.member.voiceChannel) return message.channel.send("Tu n'es pas dans un channel vocal.");

    if(!message.member(client.user).hasPermission("CONNECT")) return message.channel.send("Je n'ai pas la permission de rejoindre ce channel vocal");

    if(message.guild.me.voiceChannel) return message.channel.send(":x: Je suis déjà dans le channel vocal : " + message.guild.me.voiceChannel.name)

    await message.member.voiceChannel.join();

    message.channel.send("J'ai rejoins le channel vocal : " + message.member.voiceChannel.name)

}

module.exports.help = {
    name:"join",
    description:"le bot rejoin le channel vocal",
    usage:"join",
    category:"music"
}

module.exports.conf = {
    aliases:[]
}
