const randomPuppy = require("random-puppy");
module.exports.run = async (client, message, args) => {
    const event = randomPuppy.all(subreddit)
    event.on('data', url => {
    message.channel.send({embed:{
        color: 0x732db7,
        title: `${message.author.tag} chaaaaat ! :smile_cat:`,
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
