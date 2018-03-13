exports.run = (client, message) => {
    const randomCat = require("random-cat");
    var urlWithSize = randomCat.get({
  width: 120,
  height: 600
});
    message.channel.send({embed:{
        color: 0x732db7,
        title: `${message.author.tag} chaaaaat ! :smile_cat:`,
        url: '',
        image: urlWithSize,
        footer: {
            name: "chat by shiro",
            icon_url: message.author.avatarUrl,
            time: new Date.now()
        }
    }}).catch(console.log.error)
}
