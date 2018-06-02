exports.run = (client, message, args) => {
    if(!message.guild.channels.exists("name", "vcs")){
        message.channel.send("je n'ai pas trouvé de channel nommé `vcs` fait vcs-add pour en créer un.")
        return;
    }else{
        if(message.channel.name !== "vcs"){
        return;
        }else{
        client.channels.findAll("name", "vcs").map(c => c.send({embed:{color: Math.floor(Math.random() * 16777214) + 1, 
           
        thumbnail:{ 
            url: message.author.avatarURL 
        }, 
        fields:[{
        name: `${message.author.tag}(${message.author.id})`, 
        value: message.content.substr(5)
        },
        { 
        name: ":gear: -> Seveur:",
        value: message.guild.name 
         }],
        timestamp: new Date(), 
        footer:{ 
        text: "vcs"
                } 
            } 
        }))
        }
    }
}
