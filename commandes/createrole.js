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
        mentionnable:false, 
        hoist:true, 
        color:args[1].startsWith("#") && args[1].length == 7 ? args[1] : 0x000000
    })
    message.channel.send(`:heavy_check_mark: Role créé avec succès. nom du rôle: ${args[0]}`)
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
    aliases:["addrole"],
cooldown:5
  }
