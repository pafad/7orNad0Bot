const config = require("./config.json");
const Discord = require("discord.js");
const path = require("path");
      
const prefix = "7"
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
    if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});

client.on('message', message =>{
    //blacklist du bot
    if(message.author.client)return;
    if(message.author.id === '281774692052762627')return;
    if(message.author.id === '336560869708398594')return;
    //end
       //ping
    if(message.content === "ping"){
        message.channel.send("Pong !")
        setTimeout(() => {
            message.channel.lastMessage.edit(`:ping_pong: __${Math.round(client.ping)}__ ms !`)
        }, 600);
    }
    if(message.content === "prefix"){
            message.channel.send(`:tada: mon prefix est ${prefix}`);
    }
    //reaction
    if(message.content === 'ok'){
        message.react("🆗")
    }
    if(message.content === 'test'){
        message.react("✅")
    }
    if(message.content === 'cool'){
        message.react("❄")
    }
    if(message.content.includes('xd' ||message.content.includes('XD'))){
        message.react("😂")
    }
    if(message.content.includes('omg' || message.content.includes('omfg'))){
        message.react("😱")
    }
    if(message.content === "manger"){
        message.react("🍔")
    }
    if(message.content === 'vu' || message.content === "trouvé"){
        message.react("👀")
    }
    if(message.content === 'chut'){
        message.react("381794751437078528")
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
  if(command === `${prefix}hug`){
    let usermention = message.mentions.users.first();
    if(!usermention){
    message.channel.send(`:x: ${message.author} veuillez spécifier un utilisateur.`)
    }else{
    var embed_hug = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage("https://media.giphy.com/media/EbWgNTFqb9Muk/source.gif")
    .setDescription(`<:calins:382100679763951616> ${usermention.username} tu as reçu un câlin de ${message.author.username}`)
    .setFooter("câlin")
    .setTimestamp(Date.current)
    message.channel.sendEmbed(embed_hug)
    }
  }
});

client.login(process.env.Discord_token || process.argv[2]);
