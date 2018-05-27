const flip = require("flip-text");
exports.run = (client, message, args) => {
  let flip_text = flip(args)
  message.channel.send(flip_text)
  }
