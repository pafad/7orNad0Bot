exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_SERVER") return message.channel.send(":x: tu n'as pas la permission de gérer le serveur")
ssage.guild.setIcon(args.join());
}
