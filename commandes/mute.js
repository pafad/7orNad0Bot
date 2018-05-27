exports.run = (client, message, args) => {
  var mute = message.guild.roles.find("name", "mute")
  if(!mute){
    message.guild.createRole({
      name: "mute",
      color: 0xffff00,
      permissions: {
        "SEND_MESSAGES": false,
        "ADD_REACTIONS":false,
        "SPEAK": false
      }
    })
    message.channel.send(`j'ai pas trouvé de rôle mute du coup j'en ai créé un pour toi.`)
  }else
    let usermute = message.guild.member(message.mentions.users.first());
  if(!usermute){
  mesage.channel.send(`${message.author}, mentionnez un utilisateur à mute.`)
  }else{
    usermute.addRole(mute)
    message.channel.send(`**${usermute.user.tag}** à été mute`)
  }
}
}
