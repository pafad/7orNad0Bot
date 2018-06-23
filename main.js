const config = require("./config.json");
const Discord = require("discord.js");
const path = require("path");
const fs = require("fs");
const yt = require("ytdl-core")
const prefix = config.prefix;
const client = new Discord.Client();
let type = 1;
//rainbow
const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);

    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}
//musique
let queue = {};

const commands = {
	'play': (message) => {
		if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`:x: D'abord ajoute de la musique avec ${config.prefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(message).then(() => commands.play(message));
		if (queue[message.guild.id].playing) return message.channel.sendMessage('<a:playing:459769160679948305> Déjà en lecture.');
		let dispatcher;
		queue[message.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return message.channel.sendMessage(':x: La playlist est vide.').then(() => {
				queue[message.guild.id].playing = false;
				message.member.voiceChannel.leave();
				client.user.setPresence({game:{name:`${config.prefix}help sur ${client.guilds.size} serveurs`,url: "https://www.twitch.tv/discordapp",type}})
			});
			message.channel.sendMessage(`Je joue: **${song.title}** demandé par: **${song.requester}**`);
			dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : config.passes });
			client.user.setPresence({game:{name:`▶️ Je joue maintenant: ${song.title}`, url: "https://www.twitch.tv/discordapp",type}})
			let collector = message.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(config.prefix + 'pause')) {
					message.channel.sendMessage(':pause_button: En pause.').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(config.prefix + 'resume')){
					message.channel.sendMessage(':arrow_forward: Reprise.').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(config.prefix + 'skip')){
					message.channel.sendMessage(':arrow_right_hook: on skip.').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					message.channel.sendMessage(`:arrow_up: Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					message.channel.sendMessage(`:arrow_donw: Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(config.prefix + 'time')){
					message.channel.sendMessage(`<a:playing:459769573311512576> Time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[message.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[message.guild.id].songs.shift());
				});
			});
		})(queue[message.guild.id].songs.shift());
	},
	'join': (message) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply("Je n'ai pas la permission de me connecter dans ton channel vocal...");
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'add': (message) => {
		let url = message.content.split(' ')[1];
		if (url == '' || url === undefined) return message.channel.sendMessage(`:x: Spécifier un lien youtube après le ${config.prefix}add`);
		yt.getInfo(url, (err, info) => {
			if(err) return message.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
			queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
			message.channel.sendMessage(`Ajout de:  **${info.title}** dans la playlist`);
		});
	},
	'queue': (message) => {
		if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`:x: Ajoute de la musique avec ${config.prefix}add`);
		let tosend = [];
		queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Demandé par: ${song.requester}`);});
		message.channel.sendMessage(`__Playlist de **${message.guild.name}:**__ Il y a **${tosend.length}** dans la playlist ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},
	'reboot': (message) => {
		if (message.author.id == "306119836503900161") process.exit(); //Requires a node module like Forever to work.
	}
};
//online
client.on('ready', ()=> {
    client.user.setPresence({game:{name:`${config.prefix}help sur ${client.guilds.size} serveurs`,url: "https://www.twitch.tv/discordapp",type}})
    console.log(`${client.user.tag} connecté !`)
    if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});
//rejoins un serv
client.on("guildCreate", guild => {
  client.channels.get("452413263427141632").send(`j'ai rejoin le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
client.user.setPresence({game:{name:`${config.prefix}help sur ${client.guilds.size} serveurs`,url: "https://www.twitch.tv/discordapp",type}})
})
//part d'un serv
client.on("guildDelete", guild => {
  client.channels.get("452413263427141632").send(`j'ai quitté le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
  client.user.setPresence({game:{name:`${config.prefix}help sur ${client.guilds.size} serveurs`,url: "https://www.twitch.tv/discordapp",type}})	
})
//définir message
client.on('message', message =>{
    //blacklist du bot
    if(message.author.bot)return;
  //double arguments du turfu
  if(!message.content.startsWith(prefix))return;
  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);	
  const command = args.shift().toLowerCase();
  //musique
  if (commands.hasOwnProperty(message.content.toLowerCase().slice(config.prefix.length).split(' ')[0])) commands[message.content.toLowerCase().slice(config.prefix.length).split(' ')[0]](message);
  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commandes/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err){
  return;
  }
});

client.login(process.env.Discord_token);
