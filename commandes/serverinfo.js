exports.run = (client, message, args) => {
  const Discord = require("Discord.js")
let serverinfo_embed = new Discord.RichEmbed()
   .setTitle(`${message.guild.name}`)
   .setColor("RANDOM")
   .addField(`⚙️-> Nombre de membres:`, `${message.guild.members.size}`)
   .addField(`⚙️ -> Nombre de rôles:`,`${message.guild.roles.size}`)
   .addField(`⚙️ -> Nombre de channels:`, `${message.guild.channels.size}`)
   .setFooter(`⚙️ -> Serverinfo | ${Date.current}`)
message.channel.sendEmbed(serverinfo_embed)
}
