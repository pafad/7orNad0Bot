const flip = require("flip-text");
module.exports.run = async (client, message, args) => {
  let flip_text = flip(message.content.substr(6))
  message.channel.send(flip_text)
 }

 module.exports.help = {
   name:"flip"
 }
