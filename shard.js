const Discord = require("discord.js")
const Manager = new Discord.ShardingManager('./main.js');
Manager.spawn(2);
