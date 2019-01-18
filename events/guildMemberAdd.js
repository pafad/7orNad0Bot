const superagent = require("superagent") 
const request = require("request") 
const config = require("../config.json")
module.exports = async (client, member) => { 
client.user.setPresence({game:{name:`${config.prefix}help | ${client.guilds.size} serveurs | ${client.users.size} utilisateurs`,url: "https://www.twitch.tv/discordapp",type:1}})

 		    	const banUrl = process.env.ban
        
    request(banUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let ban = JSON.parse(body);  

if(ban[member.user.id]){

member.guild.ban(member.user.id)
member.guild.owner.user.send(`${member.user.tag} | Id: ${ban[member.user.id]} a été ban pour : ${ban[member.user.id].raison}.`)
     
} 
     
})

 
 
} 
