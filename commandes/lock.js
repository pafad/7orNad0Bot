exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send("Tu n'as pas la permission de gérer le salon");
    }else{
    try {
    message.channel.overwritePermissions({
        deny: "SEND_MESSAGE"    
    })
    message.channel.send("channel bloqué tape 7unlock pour le débloquer")
    } catch (err) {
    message.channel.send(`une erreur sauvage apparraît: ${err}`)  
        } 
    }
}
