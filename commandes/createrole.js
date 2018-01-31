exports.run = (message, client, send) => {
  let imput = message.content.substr(11)
    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> Tu n'as pas la permission de gérer les rôles`)
        return;
    }else{
    if(!imput){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> Spécifiez le nom du rôle`)
        return;
    }else{
    message.guild.createRole({name: imput})
    message.channel.send(`<:7orNad0_check_mark:400045879958175745> Role créé avec succès. nom du rôle: ${imput}`)
        }
    }
}
