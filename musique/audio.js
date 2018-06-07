function audio (message, client){
const config = require("../config.json");
const yt = require("ytdl-core");
let queue = {};
const commands = {
  'join': (message) => {
      return new Promise((resolve, reject) => {
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Je ne peux pas me connecter dans ton channel vocal...');
          voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
      });
  },
  'add': (message) => {
      let url = message.content.split(' ')[1];
      if (url == '' || url === undefined) return message.channel.sendMessage(`You must add a YouTube video url, or id after ${config.prefix}add`);
      yt.getInfo(url, (err, info) => {
          if(err) return message.channel.sendMessage('lien youtube invalide: ' + err);
          if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
          queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
          message.channel.sendMessage(`ajout de: **${info.title}** dans la playlist`);
      });
  },
  'queue': (message) => {
      if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Add some songs to the queue first with ${config.prefix}add`);
      let tosend = [];
      queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
      message.channel.sendMessage(`__**Playlist de ${message.guild.name}:**__ En cours: **${tosend.length}** Musiques à suivre: ${(tosend.length > 15 ? '*[15 musiques maximum]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
  }
};
}
module.exports = audio;
