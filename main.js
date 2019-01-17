console.log("lancement...")
const config = require("./config.json");
//const shard = require("./shard.js") ; 
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  disableEveryone: true,
  
  //shardId: process.argv[1],

  //shardCount: process.argv[2],

  fetchAllMembers: true

});

//events
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`${eventName}.js chargé`)
    client.on(eventName, event.bind(null, client));
  });
  console.log(`${files.length} events chargés`)
})

//handler

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commandes/", (err, files) => {
  
  if(err) console.log(err);

  let jsFile = files.filter(f => f.split(".").pop() === "js")

  if(jsFile.length <= 0 ){
     console.log("Coudln't find commands")
     return;
  }

  jsFile.forEach((f, i) =>{
    let props = require(`./commandes/${f}`)
    console.log(`${f} chargé !`)
    client.commands.set(props.help.name, props)
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  })
  console.log(`${jsFile.length} commandes chargée !`)
})

client.login(process.env.token);
