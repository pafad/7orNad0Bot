const config= require("../config.json")
module.exports = async (client, guild) => {
        client.channels.get("508756287392186379").send(`j'ai rejoin le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
        client.user.setPresence({game:{name:`${config.prefix}help sur ${client.guilds.size} serveurs avec ${client.users.size} utilisateurs`,url: "https://www.twitch.tv/discordapp",type:1}})
}