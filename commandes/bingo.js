exports.run = (client, message, args) => {
    let bingo = false;
    if(bingo = true){
        message.channel.send("le bingo est déjà lancé.")
    }else{
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
    bingo =true;
    }
    if(message.content === "stop"){
     message.channel.send(`le bingo a été stopé, le nombre était: ${nombre}`)
     bingo = false;
    }
}
