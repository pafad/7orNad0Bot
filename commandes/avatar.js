exports.run = (client, message) => {
    let user_avatar = message.mentions.users.first();
    if(!user_avatar){
      message.channel.send({embed:{
    color: 0x9101ff,
     author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `avatar de ${message.author.tag}`,
url: message.author.avatarURL,
image: message.author.avatar,
footer: {
icon_url: client.user.avatarURL,
text: `avatar`,
timestamp: new Date.now()
},
}})     
    }else{
         message.channel.send({embed:{
    color: 0x9101ff,
     author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `avatar de ${user_avatar.tag}`,
url: user_avatar.avatarURL,
image: user_avatar.avatar,
footer: {
icon_url: client.user.avatarURL,
text: `avatar`,
timestamp: new Date.now()
},
}})
}
}
