const { ShardingManager } = require('discord.js');

const nombre = 2;

const shard = new ShardingManager('./main.js', {
  token: process.env.token,
  autoSpawn: true, 
  totalShards:nombre
});

shard.spawn(nombre);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));
