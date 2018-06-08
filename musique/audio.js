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
  }
};
}
