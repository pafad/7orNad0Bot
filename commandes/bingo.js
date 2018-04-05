exports.run = (client, message, args) => {
    let bingo = false;
    let num = parseInt(message.args[0]);
    if(bingo = true){
        message.channel.send("le bingo est déjà lancé.")
    }else{
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
    bingo = true; 
    setTimeout(() => {
      if(num === nombre){
        message.channel.send(`gg ${message.author} tu as trouvé le nombre: ${nombre}`)
        bingo = false;
        clearTimeout();
      }else{
        message.channel.send(`vous êtes des noobs le nombre était: ${nombre}`)
        bingo = false;
      }
    }, 300000);   
      if(message.content === "7bingo stop"){
        message.channel.send(`le bingo a été stoppé, le nombre était: ${nombre}`)
        bingo = false;
        clearTimeout();
      }
  }
}
