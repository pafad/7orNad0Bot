module.exports.run = async (client, message, args) => {
    var toFind = message.guild.roles.find("name", args.join(" ")) || message.guild.roles.find("id", args.join(" ")) || message.metions.roles.first();;
    if(!toFind || toFind === undefined){
        message.channel.send("Je n'ai pas trouvé le role `" + args.join(" ") + "` essaie la mention, l'identifiant ou le nom.")
    }else{
        var filter = m => m.roles.find("name", args.join(" ")) || m => m.roles.find("id",args.join("")) || m.roles.find("id", message.mention.roles.first().id);
        message.channel.send({embed:{
            color:Math.floor(Math.random() * 16777214) + 1,
            author:{
                name:`Liste des membres ayant le role ${args.join(" ")}`,
                icon_url:message.author.avatarURL
            },
            description:`${message.guild.members.filter(filter).map(u => u.user.tag).join(`\n`)}`,
            timestamp:new Date,
            footer:{
                 icon_url:client.user.avatarURL,
                 text:"Inrole"
            }
        }})
    }
}

module.exports.help = {
    name:"inrole",
    description:"Liste des personnes ayant le rôle recherché",
    usage:"inrole <nom du role>",
    caterory:"info"
}

module.exports.conf = {
    aliases:[]
}
