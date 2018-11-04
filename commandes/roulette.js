module.exports.run = (client, message, args) => {
    if(!args || args.length < 1){
        message.channel.send(":x: Tu as rien écrit.")
        return;
    }else{
        message.channel.send(`Le gagnant de **${args.join(" ")}** est ${message.guild.members.random().user.tag}`)
    }
}

module.exports.help = {
    name:"roulette",
    description:"un utilisateur gagne le texte écrit par l'auteur du message",
    usage:"roulette/r <texte>",
    category:"fun"
}

module.exports.conf = {
    aliases:["r"]
  }