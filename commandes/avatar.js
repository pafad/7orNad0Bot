exports.run = (client, message) => {
    let user_avatar = message.mentions.users.first();
    if(!user_avatar){
        message.channel.send(`:tada: ${message.author}, ${message.author.avatarURL}`)
    }else{
        message.channel.send(`:tada: ${message.author}, ${user_avatar.avatarURL}`)
    }
}
