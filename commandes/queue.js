exports.run = (client, message) => {
const config = require("../config.json");
   if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Ajoutez de la musique avec ${config.prefix}add`);
      let tosend = [];
      queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
      message.channel.sendMessage(`__**Playlist de ${message.guild.name}:**__ En cours: **${tosend.length}** Musiques à suivre: ${(tosend.length > 15 ? '*[15 musiques maximum]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
}
