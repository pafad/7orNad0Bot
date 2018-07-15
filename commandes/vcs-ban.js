const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message, args) =>{
    var toBanIdVcs = client.users.find("id", args[0]);
        if(!message.channel.name === "vcs")return;
        if(message.author.id == "306119836503900161" || message.author.id == "351882132823736331"){
        if(!args || args.length < 1){
        message.channel.send(":x: spécifie une id à bannir")
        return;
    }else{
    if(!toBanIdVcs){
            message.channel.send(":x: utilisateur introuvable")
            return;
    }else{
    var url = "https://api.myjson.com/bins/ytjy6";
    request(url, (err, res, body) => {
				
        console.log('chargement ! ')
        
        if(err || res.statusCode!== 200)return
        
        console.log('chargé avec succès !')
        var object = JSON.parse(body)
        object[toBanIdVcs.id] = {};
        request({ url: url, method: 'PUT', json: object})
        })
        client.channels.findAll("name", "vcs").map(c => c.send('',{embed:{
            color: Math.floor(Math.random() * 16777214) + 1,
            thumbnail:{ 
                url: client.user.avatarURL 
            }, 
            fields:[
            { 
            name: "Bannissement du vcs:",
            value: `${toBanIdVcs.tag} a été banni du vcs pour non respect des règles`,
            },
            {
            name: `Modérateur:`, 
            value: message.author.tag,
            inline:true
            }
        ],
            timestamp: new Date(), 
            footer:{ 
            text: "vcs"
            } 
        }
    }))
}
}
}else{
    message.channel.send(":x: tu n'est pas un modérateur du vcs.")
}
}

module.exports.help = {
    name:"vcs-ban"
}
