module.exports.run = async (client, message, args) => {
 
 let memberMute = message.mentions.members.first();  

   

 let role = message.guild.roles.find("name", "Mute") 

   

   let Targs = args[1]; 

 

   let Hargs = args[2]; 

  

   if (!message.member.hasPermission("MANAGE_MESSAGES")){

   	

   	message.channel.send(":x: Tu n'as pas la permission de gérer les messages") 

   	

   	return ;

   	

   	}else{

   

   if(!message.guild.roles.exists("name", "Mute")){ 

   

   	message.guild.createRole({name: "Mute"}).then(role => {

   

   	message.guild.channels.map(c => c.overwritePermissions(role.id , { 

   

   		"SEND_MESSAGES":false, 

   		

   		"ADD_REACTIONS": false, 

   	

   		"CONNECT": false 

   		

   		})) 

   		

   		}) 

   		

   		message.channel.send("Un rôle Mute a été créé pour vous je dois également avoir la permissions de gérer les messages") 

   		

   		}else{ 

   			

   		if (!memberMute){

   			

   			message.channel.send("mentionne un utilisateur valide") 

   			

   			return ;

   			

   			}else{

   			

   			if (Hargs !== "min" && Hargs !== "h" && Hargs !== ""){ 

   				

   				message.channel.send("Assurez vous de mettre min pour minute et h pour heure")

   				

   		 } 

   		 

   		 //minutes

   		  

   		 if(Hargs == "min"){

   		 	

   		 let temps = Math.floor(60000 * Math.sqrt(Targs)); 

   		 

   		 setTimeout(Timer, temps); 

   		 

   		 memberMute.addRole(role).catch(console.error); 

   		 

   		 message.channel.send("**" + memberMute.user.tag + "** a été mute pour **" + Targs + "** minutes"); 

   		 

   		 function Timer() { 

   		 	

   		 	memberMute.removeRole(role).catch(console.error) 

   		 	

   		 	console.log(`DONE ! `);

   		 	} 

   		 	

   		 	}//fin de minutes 

   		 

   		  //heures

   		   	

   		 	if (Hargs == "h"){ 

   		 

   		 	let hr = Math.floor(600000 * Math.sqrt(Targs)); 

   		 	

   		 	setTimeout(Timer, hr); 

   		 	

   		 	memberMute.addRole(role).catch(console.error) 

   		 	

   		 	message.channel.send("**" + memberMute.user.tag + "** a été mute pour **"+ Targs + " heures** ");

   		

   		 function Timer() {

   		

   		 memberMute.removeRole(role).catch(console.error) 

   		 

   		 console.log(`DONE ! `);

   		 

   		 } 

   		 

   		 }//fin d'heure 

   

   

   }//fin de condition mention

   

  }//fin de condition permission 

  

 }//fin de condition role

  

} 
module.exports.help = {
    name: "mute",
    description:"mute un utilisateur",
    usage:"mute @mention 1 min",
    category:"modération"
  }

  module.exports.conf = {
    aliases:[],

cooldown:3
  }
