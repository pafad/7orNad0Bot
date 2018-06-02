exports.run = (client, message, args) => {
    if(!message.guild.channels.exists("name", "vcs")){
        message.channel.send("je n'ai pas trouvé de channel nommé `vcs` fait vcs-add pour en créer un.")
        return;
    }else{
        if(!message.guild.member.hasPermission("MANAGE_CHANNELS")){
            message.channel.send(":x: tu n'as pas éa permission de gérer les salon.")
            return;
        }else{
            message.channel.send("J'ai pas trouvé de channel vcs du coup j'em ai créé un pour vous^^")
            message.guild.createChannel("vcs").then( c => c.send({embed:{ 
                color: Math.floor(Math.random() * 16777214) + 1,
                title:"règlement", 
                description :`1: Pas de spam\n2: Pas de pub dedans\n3:Pas d'insultes ou toute formes de racisme\n4:Ne soyez pas sexistes\ncommuniquez bien entre vous^^ \n cordialement: @⚡Electrika⚡`
               }}))
            return;
            }
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
