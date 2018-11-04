module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ");
  if(!message.member.hasPermission("ADMINISTRATOR")){
    message.channel.send(":x: Tu n'est pas assez puissant pour utiliser cette commande.")
    return;
  }else{
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
}

module.exports.help = {
  name: "say",
  description:"faire parler le bot (l'utilisateur doit avoir la permission: admintrateur)",
  usage:"say/dit <texte>",
  category:"fun"
}

module.exports.conf = {
  aliases:["dit"]
}