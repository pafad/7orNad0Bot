const npm = require("libnpmsearch");
const moment = require("moment");
module.exports.run = async (client, message, args) => {
    if(!args || args.length < 1){
        message.channel.send(":x: Tu dois écrire un nom de package à rechercher.")
        return;
    }else{
    npm(args.join(" "), null).then(res => {
        if(res.length == 0)return message.channel.send(":x: Aucun résultats trouvé");
        message.channel.send({embed:{
            color:Math.floor(Math.random() * 16777214) + 1,
            title:`Package : ${res[0].name}`,
            url:res[0].links.npm,
            thumbnail:{
                url:"https://cdn2.desu-usergeneratedcontent.xyz/g/image/1519/30/1519300627843.png"
            },
            fields:[{
                name:"Version",
                value:res[0].version,
            },
            {
                name:"Description",
                value:res[0].description
            },
            {
                name:"Dernière mise à jour",
                value:moment(res[0].date).format('D/M/Y HH:mm:ss'),
            },
            {
                name:"Créateur",
                value:res[0].publisher.username
            },
            {
                name:"Info suplémentaire",
                value:"Cliquez sur le titre de ce message pour plus d'info"
            }],
            timestamp:new Date,
            footer:{
                icon_url:client.user.avatarURL,
                text:`Npm : ${res[0].name}`
            }
        }})
    })
    }
}

module.exports.help = {
    name:"npm",
    description:"recherches sur npm",
    usage:"npm <texte>",
    category:"utility"
}

module.exports.conf = {
    aliases:[]
}
