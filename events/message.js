const config = require("../config.json")
const tools = require("../functions/tools.js")
const moment = require("moment");
const prefix = config.prefix;
const active = new Map();
const superagent = require("superagent") 
const request = require("request") 

module.exports = async (client, message) => {
     if (message.author.bot) return; 
     
    if(message.channel.type === "dm") return message.channel.send("hm ?");
     
    const afkUrl = process.env.afk;
            request(afkUrl, (err, res, body) => {
        
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var afk = JSON.parse(body)
                if(!afk[message.guild.id + message.author.id]) return ;
                 
                if(afk[message.guild.id + message.author.id]) {
                
    var now = new Date().getTime();
    var distance = afk[message.guild.id + message.author.id].time - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if((afk[message.guild.id + message.author.id].time > Date.now()) && (afk[message.guild.id + message.author.id].time !== 0)){
        return;
    }else{
    delete afk[message.guild.id + message.author.id]
    request({ url: afkUrl, method: 'PUT', json: afk})
    message.channel.send(`Re ! ${message.author} j'ai retiré ton afk.`).then(m => m.delete(5000))

}      
                    }
                         

}) 
   
   
   var mention = message.mentions.members.first();
   if(mention){
   	const afkUrl = process.env.afk;
            request(afkUrl, (err, res, body) => {
        
                
                console.log('chargement !')
                
                if(err || res.statusCode!== 200)return
                
                console.log('chargé avec succés')
                var afk = JSON.parse(body)
                if(afk[message.guild.id + mention.id]){
                message.channel.send(`**${mention.user.tag}** est en afk :**${afk[message.guild.id + mention.id].reason}**.`)
               }
               }) 
   	}

     
  										  												
    
   
   
    
     //double arguments du turfu
    if(!message.content.startsWith(prefix)) return ;
    
   let messageArray = message.content.split(" ");

    let cmd = messageArray[0];

    let args = messageArray.slice(1);

  

    let opt = {

      OwnerID: config.adminID,

      active: active

    }

  

    let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));

    if(commandFile){
    
    try{

    commandFile.run(client, message, args, opt, tools)
    
   } catch (e) {

   message.channel.send("Une erreur est survenue: **"+ e.message+"**") 

   } finally {

   console.log(`${moment(new Date).format('D-M-Y à HH:mm:ss')} : ${message.author.tag} a utilisé la commande ${commandFile.help.name}`)
                   
   } 
   
    }
    
   } 
