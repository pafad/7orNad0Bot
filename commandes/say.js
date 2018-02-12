exports.run = (client, message, args) => {
  if(message.author.id !== "306119836503900161" || message.author.id !== "310474739766394882"){
   message.channel.send("t'es qui pour me dire quoi dire? xD")
    return;
  }else{
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
}
