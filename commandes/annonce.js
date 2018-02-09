exports.run = (client, message) => {
      let i = 0;
if(message.author.id=='306119836503900161') {
      serv = client.guilds.array()
      text = message.content.substr(12)
      if(i< serv.length++){
      serv[i].channels.find('type','text').send(text)
      }};
}
