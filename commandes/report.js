module.exports.run = async (client, message, args) => {
    if(!args || args.length < 1){
         message.channel.send(":x: Spécifier un bug à report.");
         return;
    }else{
        client.channels.get("506192664367202320").send({embed:{
            color: Math.floor(Math.random() * 16777214) + 1,
            thumbnail: {
             url:  message.author.avatarURL
            },
            fields:[{
                name: `report de ${message.author.tag}`,
                value: args.join(" ")
            },
        ],
        timestamp: new Date(),
    footer:{
        icon_url: client.user.avatarURL,
        text: "report"
    }
    }})
    message.channel.send("report envoyé au support du bot.") 
}
}

module.exports.help = {
    name: "report",
    description:"report un bug du bot (spam = blacklist)",
    usage:"report <texte>",
    category:"support"
}

module.exports.conf = {
    aliases:[]
  }