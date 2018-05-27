exports.run = (client, message, args) => {

    let usermute = message.guild.member(message.mentions.users.first());
  if(!usermute){
  message.channel.send(`${message.author}, mentionnez un utilisateur à mute.`)
  }else{
    var mute = message.guild.roles.exists("name", "Mute")
    if(!mute){
      message.createRole({
      name: "Mute",
      color: 0x00ffff,
       permisions
    })
    usermute.addRole(mute)
    message.channel.send(`**${usermute.user.tag}** à été mute`)
  }
}
