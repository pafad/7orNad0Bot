exports.run = (client, message,args) => {
  if(!args[1]){
    message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author}, spécifiez un lien.`)
    return;
  }
if(!message.member.voiceChannel){
message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} tu n'est pas dans un channel vocal.`)
return;
}
if(!message.guild.voiceConnection) message.member.voiceChannel.join()
if(!servs[message.guild.id]) servs[message.guild.id] = {
queue: []
};
var server = servs[message.guild.id];

server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

server.queue.push(args[1]);
  
server.queue.shift();

  
  server.queue.playing === true;
server.dispatcher.on("end", function(){
  if(server.queue[0]) play(connection, message)
  else connection.disconnect();
})
}
