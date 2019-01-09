module.exports.run = async (client, message, args) => {
    let usermention = message.guild.member(message.mentions.users.first());
    let toAdd = message.content.slice(message.content.indexOf(message.content.split(" ")[2]));
    let userRole = message.guild.roles.find("name", `${toAdd}`) || message.guild.roles.find("id", `${toAdd} `) 
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(`${message.author}, tu n'as pas la permission de gérer les rôles.`);
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`${message.author}, je n'ai pas la permission de lui ajouter ce rôle.`)
    if(!usermention){
        message.channel.send(`:x: ${message.author}, mentionnez un utilisateur valide`)
        return;
   }
  if(!message.guild.roles.exists("name", toAdd)) {
       message.channel.send("je trouve pas ce role");
      return;
     }else{
       if(usermention.roles.exists("name", `${toAdd}`)){
         usermention.removeRole(userRole)
         message.channel.send(`j'ai retiré le rôle: ${toAdd} à ${usermention.user.tag} fait la même commende pour lui rajouter ce rôle`)
         return;
       }else{
   usermention.addRole(userRole);
   message.channel.send(`j'ai ajouté le role **${toAdd}** à **${usermention.user.tag}** fait la même commande pour lui retirer ce rôle.`)
     }
   }
}

module.exports.help = {
    name: "role",
    description:"donne un rôle à quelqu'un",
    usage:"role @mention <nom du role>",
    category:"modération"
}

module.exports.conf = {
  aliases:[]
}
