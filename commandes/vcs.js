exports.run = (client, message, args) => {
if(!message.guild.channels.exists("name", "vcs"){
message.channel.send("❌ je n'ai pas trouvé de channel nommé `vcs` veuillez en créer un.")
}else{
client.channels.get("name", "vcs").send({embed:{color: Math.floor(Math.random() * 16777214) + 1,
author:{
name: message.author.tag
},
title: message.guild.name,
image:{
url: message.author.avatarURL
},
description: message.content.substr(5),
timestamp: new Date(),
footer:{
text: "vcs"
}
})
}
