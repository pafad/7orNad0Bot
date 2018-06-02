exports.run = (client, message, args) => {
   if(!message.guild.member.hasPermission("MANAGE_CHANNELS")){
   message.channel.send("tu n'as pas la permission")
      return;
   }else{
   if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")){
   message.channel.send("je n'ai pas la permission de gérer les salons")
      return;
   }else{
    message.channel.send("channel #vcs ajouté vous pouvez parler en faisant**3vcs [texte]** sans les [].");
    message.guild.createChannel("vcs").then( c => c.send({embed:{ color: 0xffff00,title:"règlement", description :`1: Pas de spam\n2: Pas de pub dedans\n3:Pas d'insultes ou toute formes de racisme\n4:Ne soyez pas sexistes\ncommuniquez bien entre vous^^ \n cordialement: @⚡Electrika⚡`}});
   }
   }
}
