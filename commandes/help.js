exports.run = (client,message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("voici les commandes.")
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .setFooter("developpé par shiro !(en dev !)")
    .addField(":gear: -> Commandes pour le developpeur", `7die, 7setavatar, 7restart, 7eval`)
    .addField(":gear: -> Commandes de modérations",`7ban, 7kick, 7lockdown, 7createrole, 7createvoice, 7createchannel, 7purge, 7setnick`)
    .addField(":gear: -> Commandes de modérations",`7ban, 7kick, 7lockdown, 7createrole, 7createvoice, 7createchannel, 7purge, 7setnick`)
    .addField(":gear: -> Commandes informations", `7serverinfo, 7uptime`)
    .addField(":gear: -> Commandes useless c:", `7roll`)
    message.channel.sendEmbed(embed);
    console.log("aide envoyé")
}
