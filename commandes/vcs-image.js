exports.run = (client, message) => {
    if(!message.guild.channels.exists("name", "vcs")){
        message.channel.send("je n'ai pas trouvé de channel nommé `vcs` fait vcs-add pour en créer un.")
        return;
    }else{
        if(message.channel.name !== "vcs"){
        return;
        }else{
            if(!message.content.link()){
                message.channel.send("mettez un lien à partager pour l'image")
            }else{
        client.channels.findAll("name", "vcs").map(c => c.send({embed:{color: Math.floor(Math.random() * 16777214) + 1,  
        thumbnail:{ 
            url: message.author.avatarURL 
        }, 
        fields:[{
        name: ":star: -> Uilisateur:",
        value: `${message.author.tag}(${message.author.id})`
        },
        {
        name: ":gear: -> Seveur:",
        value: message.guild.name
        }],
        image:{
            url: message.content.substr(10)
        }, 
        timestamp: new Date(), 
        footer:{ 
        text: "vcs"
                        } 
                    } 
                }))
            }
        }
    }
}
