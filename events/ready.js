const config = require("../config.json")

module.exports = async (client) => {
       
        client.user.setPresence({game:{name:`${config.prefix}help | ${client.guilds.size} serveurs | ${client.users.size} utilisateurs`,url: "https://www.twitch.tv/discordapp",type:1}})
       
	
        console.log(`${client.user.tag} connecté !`)
	
	client.channels.get("538318102685941770").send({embed:{
		color:0x010101, 
		author:{
                name:"Lancement réussi"
                },
		description:"Bot démarré avec succès !",
		timestamp:new Date(),
		footer:{
                icon_url:client.user.avatarURL,text:"lancé"
		} 
	}}) 
	
	

    
}
