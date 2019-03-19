module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission(["MANAGE_CHANNELS", "MOVE_MEMBERS"])) return message.channel.send("Tu n'as pas les permissions de `Gérer les salons` et `Déplacer les membres`.");

if (!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) return message.reply("Je n'ai pas les permissions de `Gérer les salons` et `Déplacer les membres`.");

const member = message.mentions.members.first();
if (!member) return message.reply("Tu dois mentionner un utilisateur/bot à kick du channel vocal.");
if (!member.voiceChannel) return message.reply("Cet utilisateur/bot n'est pas en vocal.");

try{
const temp_channel = await message.guild.createChannel(member.user.id, 'voice', [
  { id: message.guild.id,
    deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'], },
  { id: member.id,
    deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'] }
]);
await member.setVoiceChannel(temp_channel);

await temp_channel.delete();

message.channel.send(`**${member.user.username}** a été kick du voc.`);
}catch(e){
message.reply("Je n'ai pas les permissions de `Gérer les salons` et `Déplacer les membres`.") 
}
}

module.exports.help = {
name:"voicekick",
description:"kick un utilisateur ou bot du vocal",
usage:"voicekick/vk <@user/bot>",
category:"modération"
}

module.exports.conf = {
aliases:["vk"],
cooldown:3
}
