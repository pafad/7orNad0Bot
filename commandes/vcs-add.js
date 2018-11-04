const config = require("../config.json");
const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
    message.channel.send("tu n'as pas la permission de gérer les salons.")
       return;
    }else{
     message.channel.send("channel #vcs ajouté vous pouvez parler en faisant **"+config.prefix+"vcs [texte]** sans les [].");
     const ChanUrl = "https://api.myjson.com/bins/nheg2";
     request(ChanUrl, (err, res, body) => {
         
         console.log('chargement !')
         
         if(err || res.statusCode!== 200)return
         
         console.log('chargé avec succés')
         var channel = JSON.parse(body)
        if(!channel[message.guild.id]) channel[message.guild.id] = {};
        if(!channel[message.guild.id].chanid) channel[message.guild.id].chanid = message.channel.id;
        request({ url: ChanUrl, method: 'PUT', json: channel})
        var toPin = message.channel.send({embed:{ 
        color: Math.floor(Math.random() * 16777214) + 1,
        fields:[{
        name: "règlement",
        value: "salut à vous utilisateurs du vcs voici un petit règlement à suivre."
        },
        {
            name:":gear: -> Règle 1:",
            value:"Ne spammez pas les vcs."
        },
        {
           name:":gear: -> Règle 2:",
           value:"Ne faite pas votre pub dans les vcs c'est pas fait pour ça."
        },
        {
            name:":gear: -> Règle 3:",
            value:"Insultez pas dans les vcs."
        },
        {
            name:":gear: -> Règle 4:",
            value:"Toute formes de rascime y sont interdit."
        },
        {
          name:"Amusez-vous bien !",
          value: "Cordialement: "+client.users.find("id",config.adminID)
        }],
       timestamp: new Date(),
       footer:{
           text:"règlement vcs"
        }    
        }
        })
        message.pin(toPin)
    })
    }
}
module.exports.help = {
    name: "vcs-add",
    description:"ajoute la discussion interserveur sur le channel souhaité",
    usage:"vcs-add",
    category:"vcs"
  }

  module.exports.conf = {
    aliases:[]
  }