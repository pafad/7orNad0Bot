var search = require('youtube-search');
const request = require("request");
const moment = require("moment");
module.exports.run = async (client, message, args) => {
    
    var opts = {
        maxResults: 10,
        key: 'AIzaSyAtbRh4YfalDf8EcbhUzUnGLhFjtBbh6Kk'
      };

      search(args.join(" "), opts, function(err, results) {
        if(err) return message.channel.send("erreur suite à la recherche: " + err);
        message.channel.send({embed:{
            color: Math.floor(Math.random() * 16777214) + 1,
            title:results[0].title,
            url:results[0].link,
            fields:[{
            name:`Chaine : ${results[0].channelTitle}`,
            value:`Publiée le : ${moment(results[0].publishedAt).format('D/M/Y HH:mm:ss')}`,
            inline:false
            },
        ],
        image:{
            url:results[0].thumbnails.medium.url
        },
        timestamp:new Date,
        footer:{
            icon_url:message.author.avatarURL,
            text:"youtube"
        }
        }})
      });
}

module.exports.help = {
    name: "youtube",
    description:"recherche sur youtube",
    usage:"youtube/yt <texte>",
    category:"fun"
}

module.exports.conf = {
    aliases:["yt"]
  }
