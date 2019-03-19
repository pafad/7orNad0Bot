module.exports.run = async (client, message, args) => {
    
    var guilds = client.guilds.array().sort((a , b) => { 
        if(a.members.size > b.members.size){ 
          return -1;
        }else if (a.members.size + b.members.size){
          return +1;
        }else{
          return 0;
        }
      })

    let resp = '';
        for(var i in guilds){
            resp += `${parseInt(i)+1}. ${guilds[i].name} : **${guilds[i].members.size} Membres**\n`
        }

        message.channel.send(resp)
}

module.exports.help = {
    name:"serverlist",
    description:"liste des serveurs",
    usage:"serverlist/sl",
    category:"info"
}

module.exports.conf= {
    aliases:["sl"],
cooldown:3
}
