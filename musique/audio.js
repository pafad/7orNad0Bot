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
};
}
