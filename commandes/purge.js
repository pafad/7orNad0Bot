module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(`:x: ${message.author} Tu n'as pas les permission de gérer les messages`)
        return;
    }else{
      let messagecount = parseInt(args[0]) ? parseInt(args[0]) : 1;
      message.delete();
      message.channel.fetchMessages({limit: 100})
      .then(messages => {
        let msg_array = messages.array();
        message.channel.bulkDelete( msg_array.length = messagecount)
        message.channel.send(messagecount + " messages ont bien été éffacés !").then(m => m.delete(5000)).catch(console.error);
      })
}
}

module.exports.help = {
  name: "purge"
}
