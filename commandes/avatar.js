const sm = require("string-similarity")

module.exports.run = async (client, message, args) => {
    let membres = [];
    let indexes = [];
    message.guild.members.forEach(function(member){
        membres.push(member.user.username)
        indexes.push(member.id)
    })

    let match = sm.findBestMatch(args.join(" "), membres);
    let username = match.bestMatch.target;

    let ToShow = message.guild.members.get(indexes[membres.indexOf(username)]);

    let user_avatar = message.mentions.members.first() || message.guild.members.find("id", args.join(" ")) || ToShow;
    if(!args || args.length < 1){
        message.channel.send({embed:{
        color: Math.floor(Math.random() * 16777214) + 1,
        author: {
            name: message.author.tag,
            icon_url: message.author.avatarURL,
        },
        title: `avatar de ${message.author.tag}`,
        url: message.author.avatarURL,
        image: {
            url: message.author.avatarURL
        },
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: `avatar`,
        },
    }})     
    }else{
         message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
     author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `avatar de ${user_avatar.user.tag}`,
url: user_avatar.user.avatarURL,
image: {
    url: user_avatar.user.avatarURL
    },
    timestamp: new Date(),
footer: {
icon_url: client.user.avatarURL,
text: `avatar`,
},
}})
}
}

module.exports.help = {
    name: "avatar",
    description:"montre l'avatar d'un utilisateur mentionné ou le votre",
    usage:"avatar/pp @mention | avatar/pp",
    category:"info"
}

module.exports.conf = {
aliases:["pp"],
cooldown:3
}
