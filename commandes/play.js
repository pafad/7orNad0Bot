const yt = require("ytdl-core")

module.exports.run = async (client, message, args) => {
    try {
            
        if(!message.member.voiceChannel) return message.channel.send("Tu n'est pas dans un channel vocal.");

        if(message.guild.me.voiceChannel) return message.channel.send("Je suis déjà connecté en vocal.");
    
        if(!args[0]) return message.channel.send("Il faut un lien youtube à jouer.");

        let info = await yt.getInfo(args[0]);

        let connection = await message.member.voiceChannel.join();

        let dispatcher = await connection.play(yt(args[0], {filter: "audioonly"}));

        message.channel.send(`Je joue maintenant **${info.title}** demandé par **${message.author.username}**`)

    } catch (error) {

        message.channel.send("Le lien n'est pas valide.");

        console.log(error)
 
    }
   
}

module.exports.help = {
    name:"play",
    description:"joue éa musique demandée",
    usage:"play/p <lien youtube>",
    category:"music"
}

module.exports.conf = {
    aliases:["p"]
}
