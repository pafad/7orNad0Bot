exports.run = (client, message) => 
   if(!message.member.hasPermission("MANAGE_CHANNELS")){
   message.channel.send("tu n'as pas la permission")
   }else{
   if(!message.member(client.user).hasPermission("MANAGE_CHANNELS)){
   message.channel.send("je n'ai pas la permission de gérer les salons")
   }else{
   message.guild.createChannel({
   name:"vcs*,
   topic:`règles:\n1: Pas de spam\n2: Pas de pub dedans\n3:Pas d'insultes ou toute formes de racisme\n4:Ne soyez pas sexistes\ncommuniquez bien entre vous^^ \n cordialement: @⚡Electrika⚡#8754`
   })
   }
   }
}
