module.exports.run = async (client, message, args) => {
   const usermention = message.mentions.members.first();
   	
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(`:x: ${message.author} Tu n'as pas les permission de gérer les messages.`)
        return;
    }else{
    	
    	  if(usermention){ 	
      let messagecount = parseInt(args[1]) ? parseInt(args[1]) : 100;
      
      if(messagecount > 100){
      	message.channel.send(":x: Le nombre doit être compris entre 1 et 100");
      	return;
      	
      	}else{
      
      message.delete();
      message.channel.fetchMessages({limit:100})
      .then(messages => {
      	
      	message.channel.bulkDelete(messages.filter(m => m.author.id === usermention.user.id).map(m => m)).then(f => {
      	
      message.channel.send(messages.filter(m => m.author.id === usermention.user.id).size + " messages ont bien été éffacés !").then(m => m.delete(5000)).catch(console.error);
      }) 
     }) 
      return;
      
      }
      
      
      }
      
      if(args[0] === "images") {
      	
      	 let messagecount = parseInt(args[1]) ? parseInt(args[1]) : 100;
      	 
      	  if(messagecount > 100){
      	message.channel.send(":x: Le nombre doit être compris entre 1 et 100");
      	return;
      	
      	}else{
      	 
      message.delete(); 
      message.channel.fetchMessages({limit:100})
      .then(messages => {
      message.channel.bulkDelete	(messages.filter(m => m.attachments.size == 1).map(m => m)).then(f => {
      	
      message.channel.send(messages.filter(m => m.attachments.size == 1).size + " messages ont bien été éffacés !").then(m => m.delete(5000)).catch(console.error);
     }) 
     }) 
      return;
     } 
     
     }
     
     if(args[0] === "bots") {
      let messagecount = parseInt(args[1]) ? parseInt(args[1]) : 100;
      
       if(messagecount > 100){
      	message.channel.send(":x: Le nombre doit être compris entre 1 et 100");
      	return;
      	
      	}else{
      
      message.delete();
      message.channel.fetchMessages({limit: 100})
      .then(messages => {
      message.channel.bulkDelete(messages.filter(m => m.author.bot).map(mes => mes)).then(f => {
     
      message.channel.send(messages.filter(m => m.author.bot).size+ " messages ont bien été éffacés !").then(m => m.delete(5000)).catch(console.error);
     }) 
     }) 	
     return;
    	} 
    	
   } 
   
     let messagecount = parseInt(args[0]) ? parseInt(args[0]) : 100;
      if(messagecount > 100){
      	message.channel.send(":x: Le nombre doit être compris entre 1 et 100");
      	return;
      	
      	}else{
      message.delete();
      message.channel.fetchMessages({limit: 100})
      .then(messages => {
        let msg_array = messages.array();
        message.channel.bulkDelete(msg_array.length = messagecount)
        message.channel.send(messagecount + " messages ont bien été éffacés !").then(m => m.delete(5000)).catch(console.error);      
     }) 
    } 
    
} 
 
}

module.exports.help = {
  name: "purge",
  description:"supprime des messages (le nombre de messages supprimé par défaut est 100)",
  usage:"purge/clear <@mention | images | bots> <nombre de 1 à 100>",
  category:"modération"
}

module.exports.conf = {
  aliases:["clear"]
}
