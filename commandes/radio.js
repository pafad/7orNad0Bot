module.exports.run = (client, message, args, opt) => {
        
        if(!args){
        
        message.channel.send("spécifie le nom de la radio.")
        
        return;
        
        } else {
        
        if(args[0] === "stop"){
        
        if(!message.guild.me.voiceChannel) return message.reply("je ne suis pas dans un channel vocal.");
        
        message.member.voiceChannel.leave();
        
        return;
        } else {
        var fluxwebradio = args.join(" ");

        message.member.voiceChannel.join()

        .then(connection => {

            require("http").get(fluxwebradio, (res) => {
                
                if(!res) return message.reply("Aucun résultats trouvé.");
                
                connection.playStream(res);

                message.channel.send(
                {embed: {
                author:{
                name:message.author.tag
                },
                color: 0x010101, 
                description:"Lecture du flux webradio suivante :\n```" + fluxwebradio + "```\nBonne écoute !",
                timestamp:new Date(),
                footer:{
                icon_url:client.user.avatarURL,
                text:"radio"
                }
                }});

            });
            }
            }
            
            
}

module.exports.help = {
name:"radio",
description:"il met la radio souhaité",
usage:"radio <nom de la radio/stop>",
category:"music"
}

module.exports.conf = {
aliases:[]
}
