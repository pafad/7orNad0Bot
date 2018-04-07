exports.run = (client, message, args) => {
  const Discord = require("Discord.js")
    let user_avatar = message.mentions.users.first();
    if(!user_avatar){
       var selfavatar = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle(`:tada: ton avatar ${message.author.username}`)
            .setURL(`${message.author.avatarURL}`)
            .setImage(`${message.author.avatarURL}`)
            .setFooter({text: `©Avatar:${message.author.username}`, icon: client.user.avatarURL})
            .setTimestamp(new Date.now())
            message.channel.sendEmbed(selfavatar)
          
    }else{
      var mentionavatar = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle(`:tada: Avatar de: ${user_avatar.tag}`)
            .setURL(`${user_avatar.avatarURL}`)
            .setImage(`${user_avatar.avatarURL}`)
            .setFooter({text: `©Avatar: ${user_avatar.tag}`, icon: client.user.avatarURL})
            .setTimestamp(new Date.now())
            message.channel.sendEmbed(mentionavatar)
  }
}
