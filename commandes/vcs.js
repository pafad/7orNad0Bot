const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message, args) => {
    const ChanUrl = process.env.chanurl;
            request(ChanUrl, (err, res, body) => {
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var channel = JSON.parse(body)
    if(!channel[message.guild.id]){
        message.channel.send("je n'ai pas trouvé de channel vcs, fais vcs-add dans le channel souhaité.")
        return;
    }else{
        if(channel[message.guild.id].chanid && message.channel.id !== channel[message.guild.id].chanid){
        return;
        }else{
            const BanUrl = process.env.banurl;
            request(BanUrl, (err, res, body) => {
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var object = JSON.parse(body)
            if(object[message.author.id]){
                message.reply("il semblerai que vous êtes banni du vcs")
                return;
            }else{
                for(var i in channel){
                   if(i.endsWith(client.guilds.findAll("id", channel))){
                       client.channels.get(channel[i].chanid).send({embed:{
                        color: Math.floor(Math.random() * 16777214) + 1,
                        thumbnail:{ 
                            url: message.author.avatarURL 
                        }, 
                        fields:[
                        { 
                        name: "Depuis le Seveur:",
                        value: message.guild.name,
                        inline: true
                        },
                        {
                        name: `Utilisateur(${message.author.id})`, 
                        value: message.author.tag,
                        inline:true
                        },
                        {
                        name:"Message",
                        value: message.content.substr(5),
                        inline: false
                        }
                    ],
                        timestamp: new Date(), 
                        footer:{ 
                        text: "vcs"
                                } 
                                }})
                            }
                        }   
                    }
                })
            }
        }
    })
}

module.exports.help = {
    name: "vcs",
    description:"envoyer un message dans le vcs",
    usage:"vcs <texte>",
    category:"vcs"
}

module.exports.conf = {
    aliases:[],
cooldown:3
  }
