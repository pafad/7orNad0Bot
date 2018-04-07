exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> Tu n'as pas la permission de gérer les rôles`)
        return;
    }else{
    if(!args || args.length < 1){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> Spécifiez le nom du rôle`)
        return;
    }else{
    message.guild.createRole({name: args[0]})
    message.channel.send(`<:7orNad0_check_mark:400045879958175745> Role créé avec succès. nom du rôle: ${args}`)
        }
    }
}
