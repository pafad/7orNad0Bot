exports.run = (client, message, args) => {
  let usermention = message.guild.member(message.mentions.users.first());
  let toAdd = message.content.slice(message.content.indexOf(message.content.split(" ")[2]));
  let userRole = message.guild.roles.find("name", `${toAdd}`);
  if(!usermention){
      message.channel.send(`:x: ${message.author}, mentionnez un utilisateur valide`)
      return;
  }
 if(!message.guild.roles.exists("name", toAdd)) {
      message.channel.send("je trouve pas ce role");
     return;
    }else{
      if(usermention.roles.exists("name", `${toAdd}`)){
        usermention.removeRole(toAdd, {reason: `demandé par: ${message.author.tag}`})
        message.channel.send(`j'ai retiré le rôle: ${toAdd} à ${usermention.user.tag} fait la même commende pour lui rajouter ce rôle`)
        return;
      }else{
  usermention.addRole(userRole, {reason: ` demandé par ${message.author.tag}`});
  message.channel.send(`j'ai ajouté le role **${toAdd}** à **${usermention.user.tag}** fait la même commande pour lui retirer ce rôle.`)
    }
  }
}
