module.exports.run = async (client, message, args) => {

let coin = ["Heads", "Tails"]

var nombre = Math.floor(Math.random() *coin.length)

message.channel.send("I flipped the coin and got **" +coin[nombre] +"**")

}

module.exports.help = {
name:"flipcoin",
description:"un pile ou face",
usage:"flipcoin",
category:"fun"
} 

module.exports.conf = {
aliases:[]
} 
