exports.run = (client, message,args) => {
    if(!args[1]){
      message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author}, spécifiez un lien.`)
      return;
    }
  if(!message.member.voiceChannel){
  message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} tu n'est pas dans un channel vocal.`)
  return;
  }
  if(!servs[message.guild.id]) servs[message.guild.id] = {
  queue: []
  };
function play(connection, message){
  var server = servs[message.guild.id];

  server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function(){
    if(server.queue[0]) play(connection, message)
    else connection.disconnect();
  })
}
  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
    play(connection, message);
  })
}
