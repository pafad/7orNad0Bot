exports.run = (client, message, args) => {
if(message.author.id=='306119836503900161') {
      serv = client.guilds.array()
      text = message.content.substr(12)
      for(i=0;i<serv.length;i++){
      serv[i].channels.find('type','text').send(text)
}}};
}
