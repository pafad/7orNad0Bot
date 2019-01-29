const ytlist = require('youtube-playlist');   

const yt = require("ytdl-core");

   
module.exports.run = async (client, message, args, opt) => {
	

   if(!message.content.includes("https://www.youtube.com/playlist?list=")) return message.channel.send(":x: Spécifie un lien de playlist valide."); 

   if(!message.member.voiceChannel)return message.channel.send(":x: Tu n'es pas dans un channel vocal.");

   const url = args[0];

 

 

  ytlist(url, 'url').then(res => {

 

  

  var urls = res.data.playlist

  let data = opt.active.get(message.guild.id) || {};

  if(!data.queue) data.queue = [];

  

  for (var i in urls) {

  	console.log(urls[i])

  	

  	let info = yt.getInfo(urls[i]);

  	let validate = yt.validateURL(urls[i]);

  	

        data.guildID = message.guild.id;

        data.queue.push({

            songTitle:info.title,

            requester:message.author.username,

            url:urls[i],

            annouceChannel:message.channel.id

        });

  	} 

  	message.channel.send(`✨ ${urls.length} musiques ajoutées à la queue.`) 

 

  	let commandFile = require("./play.js");

  	commandFile.run(client, message, [this.urls[i] +`?vq=high`],opt);

      

  	

});
}

module.exports.help = {
name:"addplaylist", 
description:"Ajouter une playlist à la queue",
usage:"addplaylist/addplist <lien de la playlist>", 
category:"music" 
} 

module.exports.conf = {
aliases:["addplist"] 
} 
