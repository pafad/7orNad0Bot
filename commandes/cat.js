exports.run = (client, message) => {
    const random_cat = require("random-cat");
    var url = random_Cat.get();
    message.channel.send({embed:{
        color: 0x732db7,
        title: `${message.author.tag} chaaaaat ! :smile_cat:`,
        url: '',
        image: url,
        footer: {
            name: "chat by shiro",
            icon_url: message.author.avatarUrl,
            time: Date.now()
        }
    }})
}
