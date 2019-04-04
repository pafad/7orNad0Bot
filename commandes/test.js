const ytdl = require('ytdl-core-discord');

module.exports.run = async(client, message, args, opt) => {

const url = "https://youtu.be/YIeBaJDZQCA" 

function play(connection, url) {

  connection.playOpusStream(ytdl(url));

}	

} 

module.exports.help = {
name:"test", 
description:"commande de test", 
usage:"test", 
category:"hidden" 
} 

module.exports.conf = {
aliases:[] 
} 
