module.exports.run = async (client, message, args) => {
    if(!message.guild.channels.exists("name", "vcs")){
        message.channel.send("je n'ai pas trouvé de channel nommé `vcs` fait vcs-add pour en créer un.")
        return;
    }else{
        if(message.channel.name !== "vcs"){
        return;
        }else{
            if(!args){
                message.channel.send("mettez un lien à partager pour l'image")
            }else{
        client.channels.findAll("name", "vcs").map(c => c.send({embed:{color: Math.floor(Math.random() * 16777214) + 1,  
        thumbnail:{ 
            url: message.author.avatarURL 
        }, 
        fields:[{
        name: ":gear: -> Seveur:",
        value: message.guild.name
        },
        {
        name: ":gear -> Uilisateur",
        value: `${message.author.tag}(${message.author.id})`
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
        if(message.content.includes(Image)){
            var imageURL = createImageBitmap({
                image: new HTMLImageElement
            })
            client.channels.findAll("name", "vcs").map(c => c.send({embed:{color: Math.floor(Math.random() * 16777214) + 1,  
                thumbnail:{ 
                    url: message.author.avatarURL 
                }, 
                fields:[{
                name: ":gear: -> Seveur:",
                value: message.guild.name
                },
                {
                name: ":gear -> Uilisateur",
                value: `${message.author.tag}(${message.author.id})`
                }],
                image:{
                    url: imageURL
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
}
module.exports.help = {
    name: "vcs-image"
  }