const config = require("../config.json")
module.exports = async (client) => {
        client.user.setPresence({game:{name:`${config.prefix}help sur ${client.guilds.size} serveurs avec ${client.users.size} utilisateurs`,url: "https://www.twitch.tv/discordapp",type}})
}