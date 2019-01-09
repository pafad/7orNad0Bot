const config = require("../config.json")

module.exports = async (client) => {
        //rainbow
        client.user.setPresence({game:{name:`${config.prefix}help | ${client.guilds.size} serveurs | ${client.users.size} utilisateurs`,url: "https://www.twitch.tv/discordapp",type:1}})
   
}
