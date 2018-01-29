exports.run = (client,message, args) => {
        let invite_embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL)
        .setTitle("Tu veux m'inviter voici le lien:")
        .setDescription("https://discordapp.com/oauth2/authorize?client_id=360768316832481284&scope=bot&permissions=-1")
        .setFooter("un bot developpé par pafad !")
    message.channel.sendEmbed(invite_embed);     
    

}
