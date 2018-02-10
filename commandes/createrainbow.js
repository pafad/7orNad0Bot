exports.run = (client, message, args) => {
     if(message.author.id !== "306119836503900161"){
    message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> Tu n'es pas mon developpeur.`)
    return;
}else{
message.guild.createRole({name: "↻"})
message.channel.send(`<:7orNad0_check_mark:400045879958175745> Role rainbow créé avec succès !`)
    }
}
