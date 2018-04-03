let bingo = false;
exports.run = (client, message, args) => {
    bingo = true;
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
    message.channel.send(`trouve le nombre entre 0 et 100`)
    if(message.content === nombre){
        message.reply(`gg tu as trouvé le nombre: ${nombre}`)
        bingo = false
    }
}
