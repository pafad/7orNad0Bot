let bingo = false;
exports.run = (client, message, args) => {
    bingo = true;
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
    if(message.content === nombre){
        message.reply(`gg tu as trouvé le nombre: ${nombre}`)
        bingo = false
    }
}
