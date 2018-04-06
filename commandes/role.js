exports.run = (client, message, args) => {
    let usermention = message.mentions.users.first();
    let toAdd = message.guild.roles.find("name", message.guild.roles.map(r => r.name))
    if(!usermention){
        message.channel.send(`:x: ${message.author}, mentionnez un utilisateur valide`)
    }
    if(!toAdd){
      message.channel.send(`:x: ${message.author} je ne trouve pas ce rôle`)
    }
    message.member.addRole(toAdd);
    message.channel.send(`j'ai ajouté le role ${toAdd} à ${usermention.tag}`)
}
