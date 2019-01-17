module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermissions("BAN_MEMBERS")){
        message.channel.send("Du n'as pas la permission de bannir les membres")
        return; 
       }else{
    if(!args[0] || args.length < 1){
        message.channel.send(":x: Spécifiez une id d'utilisateur à bannir.")
        return
    }else{
    var toBanId = client.users.find("id", args[0])
    if(!toBanId){
        message.channel.send(":x: je ne trouve pas l'utilisateur à bannir.")
    }else{
    message.guild.ban(toBanId).then(() => {
    message.channel.send("**"+toBanId.tag+"** a été ban.")
}).catch(console.error)
        }
    }
}
}

module.exports.help = {
    name: "hackban",
    description:"bannir un utlisateur qui n'est pas sur le serveur",
    usage:"hackban/hban <id>",
    category:"modération"
  }

  module.exports.conf = {
    aliases:["hban"]
  }
