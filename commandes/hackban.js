module.exports.run = async (client, message, args) => {
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

module.exports.help = {
    name: "hackban"
  }
