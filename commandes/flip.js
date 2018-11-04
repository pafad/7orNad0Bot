const flip = require("flip-text");
module.exports.run = async (client, message, args) => {
  let flip_text = flip(args.join(" "))
  message.channel.send(flip_text)
 }

 module.exports.help = {
   name:"flip",
   description:"le bot écrit votre texte à l'envers",
   usage:"flip <texte>",
   category:"fun"
 }

 module.exports.conf = {
  aliases:[]
}