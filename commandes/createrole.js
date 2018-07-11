module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(`:x: Tu n'as pas la permission de gérer les rôles`)
        return;
    }else{
    if(!args || args.length < 1){
        message.channel.send(`:x: Spécifiez le nom du rôle`)
        return;
    }else{
    message.guild.createRole({name: args[0]})
    message.channel.send(`:heavy_check_mark: Role créé avec succès. nom du rôle: ${args}`)
        }
    }
}

module.exports.help = {
    name: "createrole"
  }
