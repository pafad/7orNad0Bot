let bingo = false;
exports.run = (client, message, args) => {
    if(bingo = true) return message.channel.send("le bingo est déjà lancé.") else bingo = true;
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
    if(message.content === "stop"){
     message.channel.send(`le bingo a été stopé, le nombre était: ${nombre}`)
     bingo = false;
    }
}
