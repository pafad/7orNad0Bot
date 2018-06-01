const ytdl = require("ytdl-core");
const youtube = require("youtube-search");

exports.run = (client, message,args) => {
   let servs = message.guild.id;
  if(!args){
    message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author}, spécifiez un lien.`)
    return;
  }
if(!message.member.voiceChannel){
message.channel.send(`:x: ${message.author} tu n'est pas dans un channel vocal.`)
return;
}
if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (){
if(!servs[message.guild.id]) servs[message.guild.id] = {
queue: []
};
function play(connection, message){
var server = servs[message.guild.id];

const dispatcher = connection.play(ytdl(args.join()));

server.queue.join(args);
  
server.queue.shift();
}
server.dispatcher.on("end", function(){
  if(server.queue[0]) play(connection, message)
  else connection.disconnect();
})
})
}
