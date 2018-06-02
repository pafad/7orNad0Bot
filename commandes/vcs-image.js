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
        image:{
            url: message.content.substr(10)
        },                                                              
        fields:[{
        name: ":gear: -> Seveur:",
        value: message.guild.name
        }],
        name: `${message.author.tag}(${message.author.id})`,
        timestamp: new Date(), 
        footer:{ 
        text: "vcs"
                } 
            } 
        }))
        }
    }
}
