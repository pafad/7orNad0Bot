const rn = require('random-number')
const hug = ["https://media.giphy.com/media/EbWgNTFqb9Muk/source.gif", "https://78.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_500.gif", "https://78.media.tumblr.com/a4642f0cd5d56c054f6a0fda50a95da5/tumblr_mtonifUecT1sn2uyvo1_500.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460993069-9ac8eaae8cd4149af4510d0fed0796bf.gif", "https://vignette.wikia.nocookie.net/shipping/images/0/04/Victurri_hug.gif/revision/latest?cb=20170611083244", "https://data.whicdn.com/images/238231217/original.gif", "https://pa1.narvii.com/6019/2f86be1cbe09925d0dfba1652c6455b7914b3ee6_hq.gif", "http://1.bp.blogspot.com/-a_o-AeFgyUk/Ut6WZ-BD01I/AAAAAAAAGPw/N1TANc7sn4Q/s1600/hug.gif", "https://media.giphy.com/media/h2FLpIm9NBIkM/giphy.gif", "https://data.whicdn.com/images/59041099/original.gif"]
exports.run = (client, message, args) => {
    const Discord = require("Discord.js")
        let usermention = message.mentions.users.first();
        if(!usermention){
        message.channel.send(`:x: ${message.author} veuillez spécifier un utilisateur.`)
        }else{
            let r = rn({
                min: 0,
                max: hug.length - 1,
                integer: true
            });
            let image = hug[r];
        var embed_hug = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(image)
        .setDescription(`:heart: ${usermention.username} tu as reçu un câlin de ${message.author.username}`)
        .setFooter("câlin")
        .setTimestamp(Date.current)
    message.channel.sendEmbed(embed_hug)
    }
}
