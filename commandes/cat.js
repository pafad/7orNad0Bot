const randomCat = require("random-cat");
exports.run = (client, message) => {
    var urlWithSize = randomCat.get({
  width: 120,
  height: 600
});
    message.channel.send({embed:{
        color: 0x732db7,
        title: `${message.author.tag} chaaaaat ! :smile_cat:`,
        url: urlWithSize,
        image: '',
        footer: {
            name: "chat by shiro",
            icon_url: message.author.avatarUrl,
            time: new Date.now()
        }
    }})
}
