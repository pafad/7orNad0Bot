const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message, args) => {
    if(!message.guild.channels.exists("name", "vcs")){
        message.channel.send("je n'ai pas trouvé de channel nommé `vcs` fait vcs-add pour en créer un.")
        return;
    }else{
        if(message.channel.name !== "piaf-vcs"){
        return;
        }else{
            const url = "https://api.myjson.com/bins/sa00e";
            request(url, (err, res, body) => {
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var object = JSON.parse(body)
            if(object[message.author.id]){
                message.reply("il semblerai que vous êtes banni du vcs")
                return;
            }else{
            if(message.author.id === "351882132823736331"){
                client.channels.findAll("name", "vcs").map(c => c.send('',{embed:{
                    color: Math.floor(Math.random() * 16777214) + 1,
                    thumbnail:{ 
                        url: message.author.avatarURL 
                    }, 
                    fields:[
                    { 
                    name: "Depuis le Seveur:",
                    value: message.guild.name,
                    inline: true
                    },
                    {
                    name: `Utilisateur(${message.author.id})`, 
                    value: message.author.tag + "<:Mod:467999242259136522>",
                    inline:true
                    },
                    {
                    name:"Message",
                    value: message.content.substr(5),
                    inline: false
                    }
                ],
                    timestamp: new Date(), 
                    footer:{ 
                    text: "vcs"
                        } 
                       } 
                        }))
                        return;
                    }else{
                    if(message.author.id === "306119836503900161"){
                        client.channels.findAll("name", "vcs").map(c => c.send('',{embed:{
                            color: Math.floor(Math.random() * 16777214) + 1,
                            thumbnail:{ 
                                url: message.author.avatarURL 
                            }, 
                            fields:[
                            { 
                            name: "Depuis le Seveur:",
                            value: message.guild.name,
                            inline: true
                            },
                            {
                            name: `Utilisateur(${message.author.id})`, 
                            value: message.author.tag + "<:Owner:468002188170625024>"+"<:Mod:467999242259136522>",
                            inline:true
                            },
                            {
                            name:"Message",
                            value: message.content.substr(5),
                            inline: false
                            }
                        ],
                            timestamp: new Date(), 
                            footer:{ 
                            text: "vcs"
                                } 
                               } 
                                }))
                                return;
                }else{
                    client.channels.findAll("name", "vcs").map(c => c.send('',{embed:{
                        color: Math.floor(Math.random() * 16777214) + 1,
                        thumbnail:{ 
                            url: message.author.avatarURL 
                        }, 
                        fields:[
                        { 
                        name: "Depuis le Seveur:",
                        value: message.guild.name,
                        inline: true
                        },
                        {
                        name: `Utilisateur(${message.author.id})`, 
                        value: message.author.tag,
                        inline:true
                        },
                        {
                        name:"Message",
                        value: message.content.substr(5),
                        inline: false
                        }
                    ],
                        timestamp: new Date(), 
                        footer:{ 
                        text: "vcs"
                        } 
                    }
                }))
                }
            }
        }
        })
    }
    }
}

module.exports.help = {
    name: "vcs"
}
