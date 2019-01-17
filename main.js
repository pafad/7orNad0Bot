console.log("lancement...")
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const antispam = require("discord-anti-spam");

antispam(client, {

  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.

  maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.

  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.

  warningMessage: "stop spam ou je te coupe la tête.", // Warning message send to the user indicating they are going to fast.

  banMessage: "a été ban pour spam, à qui le tour ?", // Ban message, always tags the banned user in front of it.

  maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned

  maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned

  deleteMessagesAfterBanForPastDays: 7, // Delete the spammed messages after banning for the past x days.

  exemptRoles: ["bypass"], // The names of the roles which should nospam-filtered

  exemptUsers: ["'./ 〄ḟεḯ⊥∀η〄◢◤#6666"] // The Discord tags of the users who should not spam-filtered

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
