exports.run = (client, message, args) => {
    let usermention = message.mentions.users.first();
    let toAdd = message.guild.roles.find("name", args)
    if(!usermention){
        message.channel.send(`:x: ${message.author}, mentionnez un utilisateur valide`)
        return;
    }
    if(toAdd !== message.guild.roles.find("name", message.guild.roles.name)){
      message.channel.send(`:x: ${message.author} je ne trouve pas ce rôle`)
      return;
    }
    message.member.addRole(toAdd);
    message.channel.send(`j'ai ajouté le role ${args} à ${usermention.tag}`)
}
