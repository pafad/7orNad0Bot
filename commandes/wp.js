const randomAnimeWp = require("random-anime-wallpapers")
module.exports.run = async (client, message, args) => {
    if(!args || args.length < 1){
    randomAnimeWp().then(images => {
    message.channel.send({embed:{
        color: Math.floor(Math.random() * 16777214) + 1,
        titile: "Random wallpapers",
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
            titile: "Random wallpapers",
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
    name:"wp"
}
