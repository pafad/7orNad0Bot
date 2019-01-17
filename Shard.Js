const Manager = new Discord.ShardingManager('./main.js');
Manager.spawn(2);
