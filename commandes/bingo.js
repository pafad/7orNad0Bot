let bingo = false;
exports.run = (client, message, args) => {
    bingo = true;
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
    if(message.content === "stop"){
     message.channel.send(`le bingo a été stopé, le nombre était: ${nombre}`)
     bingo = false;
    }
}
