exports.run = (client, message, args) => {
    let user_avatar = message.mentions.users.first();
    if(!user_avatar){
        message.channel.send({embed:{
            color: 0x030303,
            title: `:tada: ton avatar ${message.author}`,
            url: `${message.author.avatarURL}`,
            image: `${message.author.avatarURL}`,
            footer:{
             icon_url: client.user.avatarURL,
             text: `©Avatar: ${message.author.tag}`,
             timestamp: new Date.now()
            }
          }
          })
    }else{
         message.channel.send({embed:{
            color: 0x030303,
            title: `:tada: avatar de: ${user_avatar.tag}`,
            url: `${user_avatar.avatarURL}`,
            image: `${user_avatar.avatarURL}`,
            footer:{
             icon_url: client.user.avatarUrl,
             text: `©Avatar: ${user_avatar.tag}`,
             timestamp: new Date.now()
            }
          }
    })
  }
}
