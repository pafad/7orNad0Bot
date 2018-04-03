exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission de gérer le salon");
    message.channel.overwritePermissions({
        SEND_MESSAGES: false
}).catch(console.error)
    if(console.error){
        message.channel.send(`j'ai pas pu bloquer le channel à cause de ${console.error.name}`);
    }else{
message.channel.send("channel bloqué tape 7unlock pour le débloquer")  
    } 
}
