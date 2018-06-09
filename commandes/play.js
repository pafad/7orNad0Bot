exports.run = (client, message, args) => {
const yt = require("ytdl-core");
let queue = {};
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
          dispatcher.on('end', () => {
              collector.stop();
              play(queue[message.guild.id].songs.shift());
          });
          dispatcher.on('error', (err) => {
              return message.channel.sendMessage('error: ' + err).then(() => {
                  play(queue[message.guild.id].songs.shift());
              });
          });
      })(queue[message.guild.id].songs.shift());
  }
}
