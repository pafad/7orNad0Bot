exports.run = (client, message) => {
    const XP = require("./xp.json")
    message.channel.send({embed:{color:Math.floor(Math.random() * 16777214) + 1,
        fields:[{
        name:":gear: -> Niveau:",
        value: userData.level
        },
        {
        name: ":gear: -> Xp:",
        value: userData.XP
        }],
        thumbnail:message.author.avatarURL,
        timestamp:new Date(),
        footer:{
            text:"profile",
            icon_url:client.user.avatarURL
        }
    }})
}
