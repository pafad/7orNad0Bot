const config = require("./config.json");
const Discord = require("discord.js");
const path = require("path");
const fs = require("fs");
const prefix = config.prefix;
const client = new Discord.Client();
//audio
const audio = require("./commandes/audio.js")
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
//online
client.on('ready', ()=> {
    client.user.setActivity(`${prefix}help sur ${client.guilds.size} serveurs by @αмαтєяαѕυ.exe#8754 `, {type: "WATCHING"})
    console.log(`${client.user.tag} connecté !`)
    if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});
//rejoins un serv
client.on("guildCreate", guild => {
  client.channels.get("429210276815175682").send(`j'ai rejoin le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
  client.user.setActivity(`${prefix}help sur ${client.guilds.size} serveurs by @αмαтєяαѕυ.exe#8754 `, {type: "WATCHING"})
})
//part d'un serv
client.on("guildDelete", guild => {
  client.channels.get("429210276815175682").send(`j'ai quitté le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
  client.user.setActivity(`${prefix}help sur ${client.guilds.size} serveurs by @αмαтєяαѕυ.exe#8754 `, {type: "WATCHING"})
	
})
//un membre rejoin un serveur
client.on("guildMemberAdd", member => {
client.user.setActivity(`${prefix}help sur ${client.guilds.size} serveurs by @αмαтєяαѕυ.exe#8754 `, {type: "WATCHING"})
})
//un membre part un serveur
client.on("guildMemberRemove", member => {
client.user.setActivity(`${prefix}help sur ${client.guilds.size} serveurs by @αмαтєяαѕυ.exe#8754 `, {type: "WATCHING"})
})
//définir message
client.on('message', message =>{
    //blacklist du bot
    if(message.author.bot)return;
    //end
    if(message.content === "prefix"){
            message.channel.send(`:tada: mon prefix est ${prefix}`);
    }
  //double arguments du turfu
  if(!message.content.startsWith(prefix))return;
  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commandes/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err){
  return;
  }
	//Audio
	audio(message, client);      
});

client.login(process.env.Discord_token || process.argv[2]);
