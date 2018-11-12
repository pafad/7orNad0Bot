module.exports.run = async (client, message,args ,opt) => {

    let fetched = opt.active.get(message.guild.id)

    if(!fetched) return message.channel.send(":x: La playlist est vide.")

    if(message.guild.me.voiceChannel !== message.member.voiceChannel) return message.channel.send("Tu n'es pas dans le même channel vocal que moi.");

    if(isNaN(args[0] || args[0] > 200 || args[0] > 0)) return message.channel.send(`:x: Entre un nombre entre 1 et 200`)

    fetched.dispatcher.setVolume(args[0]/100)

    message.channel.send(`Le volume mis à ${args[0]}`)
}

module.exports.help = {
    name:"volume",
    description:"Augmente ou réduit le volume du song suivant la grandeur du nombre",
    usage:"voulme <nombre>",
    category:"music"
}

module.exports.conf = {
    aliases:[]
}
