exports.run = (client,message, args) => {
    const Discord = require("discord.js");
    const config = require("./config")
    const prefix = config.prefix;
    let embed = new Discord.RichEmbed()
    .setTitle("voici les commandes.")
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .setFooter("developpé par pafad !(en dev !)")
    .addField("commandes pour le developpeur", "tu n'auras pas les perms de le faire")
    .addField(`7die`, "pour arrêter le bot")
    .addField(`7setavatar [lien photo]`, "pour changer l'avatar du bot")
    .addField("commandes de modérations", "certaines son en dev")
    .addField(`7mute @mention [temps] [raison]`, "pour mute un utilisateur(en dev !)" )
    .addField(`7kick @mention [raison]`, "pour kick un utilisateur")
    .addField(`7ban @mention [raison]`, "pour ban un utilisateur")
    .addField(`7lockdown [temps]`, "pour bloquer le channel en question")
    .addField(`7warn @mention [raison]`, "pour avertir un utilisateur")
    message.channel.sendEmbed(embed);
    console.log("aide envoyé")
}
