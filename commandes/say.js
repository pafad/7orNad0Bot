exports.run = (client, message, args) => {
    const sayMessage = args.join();
  if(message.author.id !== "306119836503900161"){
   message.channel.send("t'es qui pour me dire quoi dire? xD")
    return;
  }else{
    if(message.author.id === "310474739766394882"){
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }else{
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
  }
}
