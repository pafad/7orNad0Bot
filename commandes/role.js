exports.run = (client, message, args) => {
    let usermention = message.mentions.users.first();
    let toSearch = message.content.slice(message.content.indexOf(message.content.split(" ")[2]));
    let toAdd = message.guild.roles.find("name", `${toSearch}`);
    if(!usermention){
        message.channel.send(`:x: ${message.author}, mentionnez un utilisateur valide`)
        return;
    }
   if(!toAdd)) {
        message.channel.send("je trouve pas ce role");
       return;
      }else{
          if(message.member.roles.has(toAdd)){
           message.member.removeRole(toAdd)
           message.chnnel.send(`j'ai retiré le role: *${toAdd}** à **{usermention.tag}**`)
          }else{
    usermention.addRole(toAdd);
    message.channel.send(`j'ai ajouté le role **${toAdd}** à **${usermention.tag}** fait la même commande pour lui retirer ce rôle.`)
      }
   }
}
