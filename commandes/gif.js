const giphy = require("giphy-api")
module.exports.run = async (client, message, args) => {
    if(!args){
        message.channel.send("Entre un texte pour la recherche")
        return;
    }else{
        giphy().random(args.join(" "), function(err, image){
            if (err) return message.channel.send("Une erreur est survenue lors de la recherche.")
            console.log(image)
            message.channel.send({embed:{
                color:Math.floor(Math.random() * 16777214) + 1,
                author:{
                    name:image.data.title,
                    icon_url:message.author.avatarURL
                },
                image:{
                    url:image.data.image_url
                },
                timestamp:new Date,
                footer:{
                    icon_url:client.user.avatarURL,
                    text:"gif"
                }
            }})
        })
    }
}

module.exports.help = {
    name:"gif",
    description:"recherche de gifs",
    usage:"giphy <texte>",
    category:"fun"
}

module.exports.conf = {
    aliases:[],
cooldown:3
}
