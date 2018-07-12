const randomPuppy = require("random-puppy");
module.exports.run = async (client, message, args) => {
    const event = randomPuppy('cat').then(url =>
    message.channel.send({embed:{
        color: 0x732db7,
        title: `${message.author.tag} chaaaaat !`,
        image:{
        url: url 
        },
        timestamp: new Date(),
        footer: {
            name: "chat by shiro",
            icon_url: message.author.avatarUrl,
        }
    }})
    })
}

module.exports.help = {
    name: "cat"
  }
