const discord = require("discord.js")

module.exports.run = (client, message, args) => {
    
    var pages = ["page 1", "page 2", "page 3", "page 4", "page 5", "page 6", "page 7", "page 8", "page 9", "page 10"];
    
    let page = 1;

    const embed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`Page ${page} sur ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {
        msg.react("⬅").then(r => {
            msg.react("➡")
           
            const backwardsFilter = (reaction, user) => reaction.emoji.name === "⬅" && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === "➡" && user.id === message.author.id;
           

            const backwards = msg.createReactionCollector(backwardsFilter)
            const forwards = msg.createReactionCollector(forwardsFilter)
            
            backwards.on("collect", r => {
                r.remove(message.author);
                if(page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} sur ${pages.length}`)
                msg.edit(embed)
            })
            
            forwards.on("collect", r => {
                r.remove(message.author);
                if(page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} sur ${pages.length}`)
                msg.edit(embed)
            })
        })
    })
}

module.exports.help = {
    name:"pages",
    description:"pages en embed",
    usage:"pages",
    category:"test"
}

module.exports.conf = {
    aliases:[]
}
