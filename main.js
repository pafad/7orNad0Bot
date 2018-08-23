const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const yt = require("ytdl-core")
const prefix = config.prefix;
const client = new Discord.Client({disableEveryone: true});
let type = 1;
//handler

client.commands = new Discord.Collection();

fs.readdir("./commandes/", (err, files) => {
  
  if(err) console.log(err);

  let jsFile = files.filter(f => f.split(".").pop() === "js")

  if(jsFile.length <= 0 ){
     console.log("Coudln't find commands")
     return;
  }

  jsFile.forEach((f, i) =>{
    let props = require(`./commandes/${f}`)
    console.log(`${f} loaded !`)
    client.commands.set(props.help.name, props)
  })
})
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
    client.user.setPresence({game:{name:`${config.prefix}help by ⚡Electrika⚡#8754 sur ${client.guilds.size} serveurs`,url: "https://www.twitch.tv/discordapp",type}})
    console.log(`${client.user.tag} connecté !`)
    if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});
//rejoins un serv
client.on("guildCreate",async guild => {
  client.channels.get("452413263427141632").send(`j'ai rejoin le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
  client.user.setPresence({game:{name:`${config.prefix}help by ⚡Electrika⚡#8754 sur ${client.guilds.size} serveurs`,url: "https://www.twitch.tv/discordapp",type}})
})
//part d'un serv
client.on("guildDelete",async guild => {
  client.channels.get("452413263427141632").send(`j'ai quitté le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
  client.user.setPresence({game:{name:`${config.prefix}help by ⚡Electrika⚡#8754 sur ${client.guilds.size} serveurs`,url: "https://www.twitch.tv/discordapp",type}})	
})
//définir message
client.on('message',async message =>{
	//test
	if(message.content.startsWith(">structtop"))return;
if(message.content.includes("ポイント。")){
  message.channel.send("<@377925283098918912>")
   }
     //blacklist du bot
    if(message.author.bot)return;
    if(message.channel.type === "dm") return message.channel.send("hm ?");
   //double arguments du turfu
  if(!message.content.startsWith(prefix))return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = client.commands.get(cmd.slice(prefix.length));
  if(commandFile) commandFile.run(client, message, args)
});

client.login(process.env.Discord_token);
