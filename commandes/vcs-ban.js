const fs = require("fs")
const superagent = require("superagent")
exports.run = (client, message, args) => {
if(message.author.id == "306119836503900161"){
var url = "https://api.myjson.com/bins/gguwi";
request(url, (err, res, body) => {
    
    console.log('Chargement...')
    
    if(err || res.statusCode!== 200)return;
    
    console.log('chargé avec succès !')
    var objet = JSON.parse(body)
objet[args] = {};

request({ url: url, method: 'PUT', json: objet})
client.channels.findAll('name', 'vcs').map(c => c.send('',{
 embed: {
color: Math.floor(Math.random() * 16777214) + 1,
fields:[{
    name:':gear: -> Bannissement du vcs',
    value:`${message.author.tag} a banni: ${args} du vcs`
    },
    {
    name: `Depuis le serveur: ${message.guild.name}`,
    value: ":gear: -> Raison:" + args[1]
}],
timestamp: new Date(),
footer: {
text: `vcs-ban`,
}
}
            }));
        })
    }else{
    message.channel.send("tu n'est pas un modérateur du vcs")
    return;
    }
}
