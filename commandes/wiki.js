const wiki = require('wikijs').default
const Discord = require("discord.js") 
module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()

    const query = args.join(" ");

    wiki({apiUrl:"https://fr.wikipedia.org/w/api.php"}).page(query)

    .then(page => {

    	    	const pagelink = page.raw.fullurl;

    	

    	embed.setTitle(page.raw.title) 

    	

    	embed.setAuthor("Description de : " + query)

    	

    	embed.setColor("RANDOM")

    	

    	embed.setURL(pagelink)

    	

    	embed.setTimestamp(new Date()) 

    	

    	embed.setFooter("Wiki", client.user.avatarURL) 

    	

    	page.content().then(p => { 

    	

    	embed.setDescription(p[1].content.substring(0, 2045)+"...")

    	

    	embed.addField("Plus d'info sur :", pagelink) 

    	

    	message.channel.send(embed)

    	

    	}).catch(e => {

    		message.channel.send("⚡Aucun résultat trouvé.");

    	}) 
    	

    	}).catch(e => {

    		message.channel.send("⚡Aucun résultat trouvé.");

    	}) 
      
     } 
     
     module.exports.help = {
     name:"wiki", 
     description:"recherches sur Wikipedia", 
     usage:"wiki <recherche>", 
     category:"utility" 
    } 
    
    module.exports.conf = {
    aliases:[],

cooldown:3 
   } 
