exports.run = (client, message, args) => {
if(message.author.id !== '306119836503900161'){
            message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} Tu n'est pas mon developpeur`)
            return;
        }else{
        message.channel.send(":gear: -> déconnection...")
        setTimeout(() => {
            client.user.setStatus("invisible")
            client.destroy();
            process.exit();
        } ,1000);
    }
}
