module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(`:x: Tu n'as pas la permission de gérer les rôles`)
        return;
    }else{
    if(!args || args.length < 1){
        message.channel.send(`:x: Spécifiez le nom du rôle`)
        return;
    }else{
    message.guild.createRole({
        name: args[0], 
        mentionnable:args[1] == "true" ? true : false, 
        hoist:args[2] == "true"? true : false, 
        color:args[3].startsWith("#") && args[3].length == 6 ? args[3] : 0x000000
    })
    message.channel.send(`:heavy_check_mark: Role créé avec succès. nom du rôle: ${args}`)
        }
    }
}

module.exports.help = {
    name: "createrole",
    description:"le bot crée un role",
    usage:"createrole/addrole <texte> <true/false> <true/false> <couleur hexadécimal>",
    category:"modération"
  }

  module.exports.conf = {
    aliases:["addrole"]
  }
