exports.run = (client, message, args)  => {
  var server = servs[message.guild.id];
  if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
}
