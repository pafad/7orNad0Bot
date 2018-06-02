exports.run = (client, message) => {
   if(!message.member.hasPermission("MANAGE_CHANNELS")){
   message.channel.send("tu n'as pas la permission")
   }else{
   if(!message.member(client.user).hasPermission("MANAGE_CHANNELS")){
   message.channel.send("je n'ai pas la permission de gérer les salons")
      return;
   }else{
    message.channel.send("channel #vcs ajouté vous pouvez parler en faisant**3vcs [texte]** sans les [].")
    message.guild.createChannel("vcs").then( c => c.send({embed:{ color: 0xffff00, description :`règles:\n1: Pas de spam\n2: Pas de pub dedans\n3:Pas d'insultes ou toute formes de racisme\n4:Ne soyez pas sexistes\ncommuniquez bien entre vous^^ \n cordialement: @⚡Electrika⚡`}})
   }
   }
}
