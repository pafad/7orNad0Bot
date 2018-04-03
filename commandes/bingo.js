let bingo = false;
exports.run = (client, message, args) => {
    if(bingo = true) return message.channel.send("le bingo est déjà lancé.")
    bingo = true;
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
        let collect = message.channel.createCollector({
                        time: 300000
                    });
        collect.on('message', message => {
            if(message.content === nombre){
                message.reply(`gg tu as trouvé le nombre: ${nombre}`)
                bingo = false;
            }else{
            message.channel.send(`vous êtes des noobs le nombre était: ${nombre}`)
            bingo = false;
            }
        })       
}
