module.exports.run = async (client, message,args) => {
    var ToUnmute = message.mentions.members.first();
    if (message.member.hasPermission("MANAGE_MESSAGES")){
        if(!ToUnmute.roles.exists("name", "Mute")){
            message.channel.send(":x: Cet utilisateur n'est pas mute")
            return;
        }else{
            ToUnmute.removeRole(message.guild.roles.find("name","Mute"))
            message.channel.send(`**${ToUnmute.user.tag}** a été démute !`)
        }
    }else{
        message.channel.send(":x: Tu n'as pas la permission de gérer les messages.")
        return;
    }
}

module.exports.help = {
    name:"unmute",
    description:"démute un utilisateur",
    usage:"unmute/demute @mention",
    category:"modération"
}

module.exports.conf = {
    aliases:["demute"],
cooldown:3
}
