exports.run = (client, message, args) => {
    let usermention = message.mentions.users.first();
    let toSearch = message.content.slice(message.content.indexOf(message.content.split(" ")[2]));
    let toAdd = message.guild.roles.find("name", `${toSearch}`);
    if(!usermention){
        message.channel.send(`:x: ${message.author}, mentionnez un utilisateur valide`)
        return;
    }
   if(!message.guild.roles.exists("name", `${toAdd}`)){
        message.channel.send("je trouve pas ce role");
       return;
      }else{
    usermention.addRole(toAdd, {reason: ` demandé par ${message.author.tag}`});
    message.channel.send(`j'ai ajouté le role **${toAdd}** à **${usermention.tag}** fait la même commande pour lui retirer ce rôle.`)
   }
}
