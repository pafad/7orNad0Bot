exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(`Tu n'as pas la permission de gérer les rôles`)
        return;
    }else{
    if(!args || args.length < 1){
        message.channel.send(`Spécifiez le nom du rôle`)
        return;
    }else{
    message.guild.createRole({name: args.join()})
    message.channel.send(`Role créé avec succès. nom du rôle: ${args}`)
        }
    }
}
