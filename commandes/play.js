const yt = require("ytdl-core")
const search = require("youtube-search");
module.exports.run = async (client, message, args, opt) => {

        if(!message.member.voiceChannel) return message.channel.send("Tu n'es pas dans un channel vocal.");
    
        if(!args[0]) return message.channel.send("Il faut un lien youtube à jouer.");

        let validate = yt.validateURL(args[0]);

        if(!validate){

            let commandFile = require("./search.js")
            return commandFile.run(client,message, args, opt)
                
        }

        let data = opt.active.get(message.guild.id) || {};
        let info = await yt.getInfo(args[0]);
        
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

    client.channels.get(data.queue[0].annouceChannel).send(`Je joue maintenant : **${data.queue[0].songTitle}** | Demandé par : **${data.queue[0].requester}**`)

    data.dispatcher = await data.connection.playStream(yt(data.queue[0].url, {filter:"audioonly", quality:"highest"}), {bitrate: 192000 /* 192kbps */})
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.on('end',function(){
        finish(client ,opt ,this)
    })
}

function finish(client, opt, dispatcher) {
    let fetched = opt.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if(fetched.queue.length > 0){

        opt.active.set(dispatcher.guildID, fetched);

        playStream(client, opt, fetched);
    }else{
            
        opt.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;

        if(vc) vc.leave();
        
        client.channels.get(fetched.queue[0].annouceChannel).send(":x: La playlist est vide")
    }


}

module.exports.help = {
    name:"play",
    description:"joue la musique demandée",
    usage:"play/p <lien ou titre",
    category:"music"
}

module.exports.conf = {
    aliases:["p"]
}
