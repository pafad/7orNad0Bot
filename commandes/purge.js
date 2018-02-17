exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} Tu n'as pas les permission de gérer les messages`)
        return;
    }else{
    let messagecount = parseInt(args[0]) ? parseInt(args[0]) : 1;
  message.channel.fetchMessages({limit: 100})
  .then(messages => {
    let msg_array = messages.array();
    msg_array.length = messagecount + 1;
    msg_array.map(m => m.channel.bulkDelete().catch(console.error));
  })};
}
