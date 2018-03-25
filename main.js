const config = require("./config.json");
const Discord = require("discord.js");
const path = require("path");
const prefix = "7";
//rpc
const { client } = require("discord-rpc/browser");
const ClientID = '360768316832481284'
const scopes = ['rpc', 'rpc.api', 'messages.read'];
const params = new URLSearchParams(document.location.hash.slice(1));
const accessToken = params.has('access_token') ?
  params.get('access_token') : localStorage.accessToken;
localStorage.accessToken = accessToken;
const client = new Client({ transport: 'websocket' });
if (!accessToken) {
  // Redirect to discord to get an access token
  document.location.href = `https://discordapp.com/oauth2/authorize?response_type=token&client_id=${clientID}&scope=${scopes.join(' ')}`;
}
const client = new Client({ transport: 'websocket' });
 
let type = 1;
const client = new Discord.Client();
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
    client.user.setPresence({game: {name: `${prefix}help | ${client.guilds.size} serveurs| ${client.users.size} utilisateur |${client.channels.size} channels | créé par @💎🌸〄ṧℏ!ʀo̸〄🌸💎ه#8754`,url: "https://twitch.tv/pafad0gaming",type}})
    console.log(`${client.user.tag} connecté !`)
    console.log('Logged in as', client.application.name);
    console.log('Authed for user', client.user.tag);
    client.selectVoiceChannel('381180634606993422');
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
});

client.login(process.env.Discord_token || process.argv[2] || clientID, { accessToken, scopes });
