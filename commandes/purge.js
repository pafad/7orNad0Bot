exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
    message.channel.send(`:x: ${message.author} Tu n'as pas les permission de gérer les messages`)
    return;
}else{
if(args.length < 1){
  message.channel.send("entrez un nombre entre 1 et 100")
  return;
}else{
let messagecount = parseInt(args[0]) ? parseInt(args[0]) : 1;
    const msg_array = new Array({arraylenght: 500})
    message.channel.bulkDelete( msg_array.length = messagecount + 1).then.catch(console.error);
    })
    }
}
}
