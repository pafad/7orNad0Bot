const search = require("youtube-search")

module.exports.run = async (client, message, args, opt) => {
    search(args.join(" "), opts, function (err, res){

        if(err) return message.channel.send(":x: Une erreur est survenue lors de la recherche.")

        let resp = '';

        for (var i in res) {

            resp += `**[${parseInt(i)+1}]**\`${res[i].title}\`\n`;

        }
        resp += `\`Choisi un résultat de entre 1 et ${res.length}\``  
        
        message.channel.send(resp)

        const filter = m => !isNaN(m.content) && m.content < res.length+1 && m.content > 0

        const collector = message-channel.createCollector(filter);

        collector.on("message", m => {
            
            let commandFile = require("./play.js");
            commandFile.run(client, message, this.res[parseInt(m.content-1).url], opt)
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
