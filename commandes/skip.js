exports.run = (client, message, args)  => {
  var server = servs[message.guild.id]
  if(server.dispatcher) server.dispatcher.end();
}
