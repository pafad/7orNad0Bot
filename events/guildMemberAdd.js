const superagent = require("superagent") 
const request = require("request") 

module.exports = async (client, member) => { 

 		    	const banUrl = process.env.ban
        
    request(banUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let ban = JSON.parse(body);  

if(ban[member.user.id]){

member.guild.ban(member.user.id)
member.guild.owner.user.send(`${member.user.tag} | Id: ban[member.user.id] a été ban pour : ${ban[member.user.id].raison}.`)
     
} 
     
})

 
 
} 
