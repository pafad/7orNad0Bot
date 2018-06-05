function audio (msg, client){
const config = require("../config.json");
const yt = require("ytdl-core");
let queue = {};
const commands = {
  'play': (msg) => {
      if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`ajoute de la musique avec ${config.prefix}add`);
      if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
      if (queue[msg.guild.id].playing) return msg.channel.sendMessage('déjà en lecture');
      let dispatcher;
      queue[msg.guild.id].playing = true;

      console.log(queue);
      (function play(song) {
          console.log(song);
          if (song === undefined) return msg.channel.sendMessage('il y a pas de musiques dans la playlist').then(() => {
              queue[msg.guild.id].playing = false;
              msg.member.voiceChannel.leave();
          });
          msg.channel.sendMessage(`Je joue: **${song.title}** demandé par: **${song.requester}**`);
          dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : config.passes });
          let collector = msg.channel.createCollector(m => m);
          collector.on('message', m => {
              if (m.content.startsWith(config.prefix + 'pause')) {
                  msg.channel.sendMessage('pause').then(() => {dispatcher.pause();});
              } else if (m.content.startsWith(config.prefix + 'resume')){
                  msg.channel.sendMessage('continue').then(() => {dispatcher.resume();});
              } else if (m.content.startsWith(config.prefix + 'skip')){
                  msg.channel.sendMessage('skip').then(() => {dispatcher.end();});
              } else if (m.content.startsWith('volume+')){
                  if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                  dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
                  msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
              } else if (m.content.startsWith('volume-')){
                  if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                  dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
                  msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
              } else if (m.content.startsWith(config.prefix + 'time')){
                  msg.channel.sendMessage(`temps: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
              }
          });
          dispatcher.on('end', () => {
              collector.stop();
              play(queue[msg.guild.id].songs.shift());
          });
          dispatcher.on('error', (err) => {
              return msg.channel.sendMessage('error: ' + err).then(() => {
                  collector.stop();
                  play(queue[msg.guild.id].songs.shift());
              });
          });
      })(queue[msg.guild.id].songs.shift());
  },
  'join': (msg) => {
      return new Promise((resolve, reject) => {
          const voiceChannel = msg.member.voiceChannel;
          if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('Je ne peux pas me connecter dans ton channel vocal...');
          voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
      });
  },
  'add': (msg) => {
      let url = msg.content.split(' ')[1];
      if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or id after ${config.prefix}add`);
      yt.getInfo(url, (err, info) => {
          if(err) return msg.channel.sendMessage('lien youtube invalide: ' + err);
          if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
          queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
          msg.channel.sendMessage(`ajout de: **${info.title}** dans la playlist`);
      });
  },
  'queue': (msg) => {
      if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${config.prefix}add`);
      let tosend = [];
      queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
      msg.channel.sendMessage(`__**Playlist de ${msg.guild.name}:**__ En cours: **${tosend.length}** Musiques à suivre: ${(tosend.length > 15 ? '*[15 musiques maximum]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
  }
};
}
module.exports = audio;
