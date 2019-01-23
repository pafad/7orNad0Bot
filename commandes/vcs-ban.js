const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message, args, opt) =>{
const modUrl = process.env.mods;
            request(modUrl, (err, res, body) => {
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var mods = JSON.parse(body)

	
	
    const ChanUrl = process.env.chanurl;
        request(ChanUrl, (err, res, body) => {
            
            console.log('chargement !')
            
            if(err || res.statusCode!== 200)return
            
            console.log('chargé avec succés')
            var channel = JSON.parse(body)
    var toBanIdVcs = client.users.find("id", args[0]);
    if(!channel[message.guild.id]){
        message.channel.send("Je n'ai pas trouvé de channel vcs fais"+config.prefix+"vcs-add dans le channel souhaité.")
    }else{
        if(channel[message.guild.id].chanid !== message.channel.id){
            return;
        }else{
		
        if(message.author.id == opt.OwnerID || mods[message.author.id]){
        if(!args || args.length < 1){
        message.channel.send(":x: spécifie une id à bannir")
        return;
    }else{
    if(!toBanIdVcs){
            message.channel.send(":x: utilisateur introuvable")
            return;
    }else{
    var url = process.env.banurl;
    request(url, (err, res, body) => {
				
        console.log('chargement ! ')
        
        if(err || res.statusCode!== 200)return
        
        console.log('chargé avec succès !')
        var object = JSON.parse(body)
        object[toBanIdVcs.id] = {};
        request({ url: url, method: 'PUT', json: object})
        })
        for(var i in channel){
            if(i.endsWith(client.guilds.findAll("id", channel))){
                client.channels.get(channel[i].chanid).send({embed:{
                 color: Math.floor(Math.random() * 16777214) + 1,
                 thumbnail:{ 
                     url: message.author.avatarURL 
                 }, 
                 fields:[
                 { 
                 name: "Bannissement du vcs:",
                 value: `${toBanIdVcs.tag} a été ban du vcs pour un manque de respect des règles.`,
                 inline: true
                 },
                 {
                 name: `Responsable :`, 
                 value: message.author.tag,
                 inline:true
                 },
             ],
                 timestamp: new Date(), 
                 footer:{ 
                 text: "vcs"
                         } 
                         }})
                     }
                 }   
    }
}
}else{
    message.channel.send(":x: tu n'est pas un modérateur du vcs.")
}
}
}
})		
})
} 
	

module.exports.help = {
    name:"vcs-ban",
    description:"bannir quelqu'un du vcs",
    usage:"vcs-ban <id de l'utilisateur>",
    category:"vcs"
}

module.exports.conf = {
    aliases:[]
  }
