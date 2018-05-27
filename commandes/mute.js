exports.run = (client, message, args) => {
  var mute = message.guild.roles.exists("name", "mute")
  if(!mute){
    message.channel.send("je ne trouve pas de rôle 'mute' veuillez en créer un")
      }
  }else{
    let usermute = message.guild.member(message.mentions.users.first());
  if(!usermute){
  message.channel.send(`${message.author}, mentionnez un utilisateur à mute.`)
  }else{
    usermute.addRole(mute)
    message.channel.send(`**${usermute.user.tag}** à été mute`)
  }
}
