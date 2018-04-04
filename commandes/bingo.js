exports.run = (client, message, args) => {
    let bingo = false
    if(bingo = true){
        message.channel.send("le bingo est déjà lancé.")
    }else{
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
    bingo =true
    }
    if(message.args[0] === "stop"){
     message.channel.send(`le bingo a été stoppé, le nombre était: ${nombre}`)
     bingo = false
    }
}
