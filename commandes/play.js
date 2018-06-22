const yt = require("ytdl-core")
const tokens = require("./config.json)
let type = 1;
exports.run = (client, message, args) => {
if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
		if (!message.guild.voiceConnection) return args.join(msg).then(() => args.play(msg));
		if (queue[message.guild.id].playing) return message.channel.sendMessage(':playing: Déjà en lecture');
		let dispatcher;
		queue[message.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return message.channel.sendMessage(':x: La playlist est vide').then(() => {
				queue[message.guild.id].playing = false;
				message.member.voiceChannel.leave();
			});
			message.channel.sendMessage(`:playing: Je joue: **${song.title}** demandé par: **${song.requester}**`);
			dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
			client.user.setPresence({game:{name::arrow_forward: Playing: song.title, url: "https://www.twitch.tv/discordapp",type}})
			let collector = message.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(tokens.prefix + 'pause')) {
					message.channel.sendMessage('paused').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(tokens.prefix + ':arrow_forward: Reprise')){
					message.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(tokens.prefix + 'skip')){
					message.channel.sendMessage('skipped').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return message.channel.sendMessage(`:arrow_up: Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return message.channel.sendMessage(`:arrow_down: Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(tokens.prefix + 'time')){
					message.channel.sendMessage(`:playing: Temps: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[message.guild.id].songs.shift());
				client.user.setActivity("rien pour le moment", {type: "LISTENING"})
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[message.guild.id].songs.shift());
					client.user.setActivity("rien pour le moment", {type: "LISTENING"})
				});
			});
		})(queue[message.guild.id].songs.shift());
  }
