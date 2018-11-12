const yt = require("ytdl-core")

module.exports.run = async (client, message, args, opt) => {
         try{
                     
        if(!message.member.voiceChannel) return message.channel.send("Tu n'es pas dans un channel vocal.");
    
        if(!args[0]) return message.channel.send("Il faut un lien youtube à jouer.");

        let info = await yt.getInfo(args[0]);
                  
        let data = opt.active.get(message.guild.id) || {};

        if(!data.connection) data.connection = await message.member.voiceChannel.join();
         
        if(!data.queue) data.queue = [];

        data.guildID = message.guild.id;

        data.queue.push({
            songTitle:info.title,
            requester:message.author.username,
            url:args[0],
            annouceChannel:message.channel.id
        });

        if(!data.dispatcher){ 
            playStream(client, opt, data);
        }else {
            message.channel.send(`Ajouté à la queue : **${info.title}** | Demandé par : **${message.author.tag}**`)
        }

        opt.active.set(message.guild.id, data);
                     
         }catch (e){
          message.channel.send("une erreur est survenue " + e.message)           
         }
}

async function playStream(client, opt, data) {

    client.channels.get(data.queue[0].annouceChannel).send(`Je joue maintenant : **${data.queue[0].songTitle}** | demandé par : **${data.queue[0].requester}**`)

    var stream = yt(data.queue[0].url, {quality:"highestaudio" ,filter:"audioonly"})

    data.dispatcher = await data.connection.playStream(stream)

    stream.once('end', function () {
        finish(client ,opt , this);
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
             
    }
}

module.exports.help = {
    name:"play"
}

module.exports.conf = {
    aliases:["p"]
}
