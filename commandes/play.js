const yt = require("ytdl-core")

module.exports.run = async (client, message, args, opt) => {
            
        if(!message.member.voiceChannel) return message.channel.send("Tu n'est pas dans un channel vocal.");

        if(message.guild.me.voiceChannel) return message.channel.send("Je suis déjà connecté en vocal.");
    
        if(!args[0]) return message.channel.send("Il faut un lien youtube à jouer.");

        let validate = await yt.validateURL(args[0]);

        if(!validate) return message.channel.send("Entre un lien valide");

        let data = opt.active.get(message.guil.id) || {};

        if(!data.connection) data.connection = await message.member.voiceChannel.join();

        if(!data.queue) data.queue = [];

        data.guildID = message.guild.id;

        data.queue.push({
            songTitle:info.title,
            requester:message.author.username,
            url:args[0],
            annouceChannel:message.channel.id
        });

        if(!data.dispatcher) playStream(client, opt, data);
        else {
            message.channel.send(`Ajouté à la queue : **${info.title}** | Demandé par : **${message.author.tag}**`)
        }

        opt.active.set(message.guild.id, data);
}

async function playStream(client, opt, data) {

    client.channels.get(data.queue[0].annouceChannel).send(`Je joue maintenant : **${data.queue[0]}** | demandé par : **${data.queue[0].requester}**`)

    data.dispatcher = await data.connection.playStream(yt(data.queue[0].url, {filter:"audioonly"}))

    data.dispatcher.once('finish',function () {
        finish(client ,opt ,this)
    })
}

function finish(client, opt, dispatcher) {
    let fetched = opt.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if(fetched.queue.length > 0){

        opt.active.set(message.guid.id, data);

        playStream(client, opt, fetched);
    }else{
        
        opt.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;

        if(vc) vc.leave();
    }
}

module.exports.help = {
    name:"play"
}

module.exports.conf = {
    aliases:["p"]
}
