module.exports.run = async (client, message, args) => {
     if(message.author.id !== "306119836503900161"){
    message.channel.send(`:x: Tu n'es pas mon developpeur.`)
    return;
}else{
message.guild.createRole({name: "↻"})
message.channel.send(`:heavy_check_mark: Role rainbow créé avec succès !`)
    }
}

module.exports.help = {
    name: "createrainbow"
  }
