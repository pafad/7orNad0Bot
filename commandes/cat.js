const randomCat = require("random-cat");
const rn = require("random-number")
exports.run = (client, message) => {
  var options = {
        min: 0,
        max: randomCat().length - 1,
        integer: true
    }
  var random_msg = rn(options)
    message.channel.send({embed:{
        color: 0x732db7,
        title: `${message.author.tag} chaaaaat ! :smile_cat:`,
        url: randomCat()[random_msg],
        image: '',
        footer: {
            name: "chat by shiro",
            icon_url: message.author.avatarUrl,
            time: new Date.now()
        }
    }})
}
