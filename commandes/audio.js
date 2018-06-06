function audio (message, client){
const config = require("../config.json");
const yt = require("ytdl-core");
let queue = {};
const commands = {
  'play': (message) => {
      if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`ajoute de la musique avec ${config.prefix}add`);
      if (!message.guild.voiceConnection) return commands.join(message).then(() => commands.play(message));
      if (queue[message.guild.id].playing) return message.channel.sendMessage('déjà en lecture');
      let dispatcher;
      queue[message.guild.id].playing = true;

      console.log(queue);
      (function play(song) {
          console.log(song);
          if (song === undefined) return message.channel.sendMessage('il y a pas de musiques dans la playlist').then(() => {
              queue[message.guild.id].playing = false;
              message.member.voiceChannel.leave();
          });
          message.channel.sendMessage(`Je joue: **${song.title}** demandé par: **${song.requester}**`);
          dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : config.passes });
          let collector = message.channel.createCollector(m => m);
          collector.on('message', m => {
              if (m.content.startsWith(config.prefix + 'pause')) {
                  message.channel.sendMessage('pause').then(() => {dispatcher.pause();});
              } else if (m.content.startsWith(config.prefix + 'resume')){
                  message.channel.sendMessage('continue').then(() => {dispatcher.resume();});
              } else if (m.content.startsWith(config.prefix + 'skip')){
                  message.channel.sendMessage('skip').then(() => {dispatcher.end();});
              } else if (m.content.startsWith('volume+')){
                  if (Math.round(dispatcher.volume*50) >= 100) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                  dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
                  message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
              } else if (m.content.startsWith('volume-')){
                  if (Math.round(dispatcher.volume*50) <= 0) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                  dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
                  message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
              } else if (m.content.startsWith(config.prefix + 'time')){
                  message.channel.sendMessage(`temps: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
              }
          });
          dispatcher.on('end', () => {
              collector.stop();
              play(queue[message.guild.id].songs.shift());
          });
          dispatcher.on('error', (err) => {
              return message.channel.sendMessage('error: ' + err).then(() => {
                  collector.stop();
                  play(queue[message.guild.id].songs.shift());
              });
          });
      })(queue[message.guild.id].songs.shift());
  },
  'join': (msg) => {
      return new Promise((resolve, reject) => {
          const voiceChannel = msg.member.voiceChannel;
          if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('Je ne peux pas me connecter dans ton channel vocal...');
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
