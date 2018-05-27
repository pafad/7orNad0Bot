const randomCat = require("random-cat");
const random_number
exports.run = (client, message) => {
  
    message.channel.send({embed:{
        color: 0x732db7,
        title: `${message.author.tag} chaaaaat ! :smile_cat:`,
        url: ,
        image: '',
        footer: {
            name: "chat by shiro",
            icon_url: message.author.avatarUrl,
            time: new Date.now()
        }
    }})
}
