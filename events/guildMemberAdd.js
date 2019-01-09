module.exports = async (client, member) => { 

 		    	const banUrl = process.env.ban;

    var user = client.users.find("id",args[0]);

    request(banUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let ban = JSON.parse(body);  

if(ban[member.user.id]){

member.guild.ban(member)
member.guild.owner.send(`${member.user.tag} | Id: ban[member.user.id] a été ban pour : ${an[member.user.id].raison}.`)
     
} 
     
})

} 
