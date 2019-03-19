const randomAnimeWp = require("random-anime-wallpapers")
module.exports.run = async (client, message, args) => {
    if(!args || args.length < 1){
    randomAnimeWp().then(images => {
    message.channel.send({embed:{
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "l'image ne s'affiche pas ? cliquez ici",
        url:images[0].full,
        image:{
            url: images[0].full
        },
    timestamp: new Date(),
footer:{
icon_url:client.user.avatarURL,
text:"Wallpapers"   
}
}})
})
}else{
    randomAnimeWp(message.content.substr(4)).then(result => {   
        message.channel.send({embed:{
            color: Math.floor(Math.random() * 16777214) + 1,
            title: "l'image ne s'affiche pas ? cliquez ici",
            url:result[0].full,
            image:{
                url: result[0].full
            },
        timestamp: new Date(),
    footer:{
    icon_url:client.user.avatarURL,
    text:"Wallpapers"   
    }
    }})   
})
}
}
module.exports.help = {
    name:"wp",
    description:"wallpaper random ou selon la recheche",
    usage:"wp <texte>",
    category:"fun"
}

module.exports.conf = {
    aliases:[],
cooldown:3
  }
