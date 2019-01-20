const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./main.js', {
  token: process.env.token,
  autoSpawn: true
});

shard.spawn(1);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));
