const config = require("./config.json");
const Discord = require("discord.js");
const path = require("path");
const youtube_search = require("youtube-search");
const ytdl = require("ydtl-core");
const prefix = "7"
let type = 1;
const client = new Discord.Client();
var servs = {};
var queue = {};
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
//fonction musique
function play(connection, message){
  var server = servs[message.guild.id];

  server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function(){
    if(server.queue[0]) play(connection, message)
    else connection.disconnect();
  })
}
server.queue.push(args[1]);
//online
client.on('ready', ()=> {
    client.user.setPresence({game: {name: `${prefix}help | ${client.guilds.size} serveurs| ${client.users.size} utilisateur |${client.channels.size} channels | créé par @💎🌸〄ṧℏ!ʀo̸〄🌸💎ه#8754`,url: "https://twitch.tv/pafad0gaming",type}})
    console.log(`${client.user.tag} connecté !`)
    if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});

client.on('message', message =>{
    //blacklist du bot
    if(message.author.bot)return;
    if(message.author.id === '281774692052762627')return;
    if(message.author.id === '336560869708398594')return;
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
  if(message.content === 'serverinfo'){

  }
});

client.login(process.env.Discord_token || process.argv[2]);
