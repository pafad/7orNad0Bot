const search = require("yt-search")

module.exports.run = async (client, message, args, opt) => {
    search(args.join(" "), function (err, res){

        if(err) return message.channel.send(":x: Une erreur est survenue lors de la recherche.")

        let videos = res.videos.slice(0, 10);

        let resp = '';

        for (var i in videos) {

            resp += `**[${parseInt(i)+1}]**\`${videos[i].title}\`\n`;

        }
        resp += `\`Choisi un résultat de entre 1 et ${videos.length}\``  
        
        message.channel.send(resp)

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = message.channel.createCollector(filter);

        collector.videos = videos;

        collector.once('collect', function(m) {
            
            let commandFile = require("./play.js");
            commandFile.run(client, message, [this.videos[parseInt(m.content-1)].url], opt)

        })
    })
}

module.exports.help = {
    name:"serach",
    description:"cherche une vidéo youtube et la joue en vocal",
    usage:"search <texte>",
    category:"music"
}

module.exports.conf = {
    aliases:[]
}
