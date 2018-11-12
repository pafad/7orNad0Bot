module.exports.run = async (client, message, args, opt) => {

    let fetched = opt.active.get(message.guild.id);

    if(!fetched) return message.channel.send(":x: La playlist est vide.");

    if(!message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Tu n'es pas dans le même channel vocal que moi.");

    let userCount = message.member.voiceChannel.members.size;

    let required = Math.ceil(userCount/2);

    if(!fetched.queue[0].voteSkip) fetched.queue[0].voteSkip = []

    if(fetched.queue[0].voteSkip.includes(message.member.id)) return message.channel.send(`Tu as déjà voté pour skip ! ${fetched.queue[0].voteSkip}/${required} votes.`);

    fetched.queue[0].voteSkip.push(message.member.id);

    opt.active.set(message.guild.id, fetched);

    if(fetched.queue[0].voteSkip.length >= required){
        message.channel.send("Skip avec succès !")

        fetched.dispatcher.emit('end');
        return;
    }
    
    message.channel.send(`Vote pour skip avec succès ${fetched.queue[0].voteSkip.length}/${required}`)

}

module.exports.help = {
    name:"skip",
    description:"passe à la musique suivante",
    usage:"skip/s",
    category:"music",
}

module.exports.conf = {
    aliases:["s"]
}
