module.exports.run = async (client, message, args) => {
if(!message.author.id === '306119836503900161')return message.channel.send(":x: tu n'est pas mon developpeur");
  if(!args || args.size < 1) return message.reply("donne le nom d'une commande à recharger.");
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);
};

module.exports.help = {
  name: "reload",
  description:"recharge une commande",
  usage:"reload <commande>",
  category:"owner"
}

module.exports.conf = {
  aliases:[]
}