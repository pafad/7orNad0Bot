let bingo = false;
exports.run = (client, message, args) => {
    if(bingo = true) return message.channel.send("le bingo est déjà lancé.")
    bingo = true;
    let nombre = Math.floor(Math.random() * 100)
    message.author.send(`le nombre est: ${nombre}`)
        let collect = message.channel.createCollector(ms => ms.author.id === message.author.id, {
                        time: 300000
                    });
        collect.on('message', msg => {
            if(msg.content.substr(1) === nombre){
                msg.reply(`gg tu as trouvé le nombre: ${nombre}`)
                bingo = false;
            }else{
            msg.channel.send(`vous êtes des noobs le nombre était: ${nombre}`)
            bingo = false;
            }
        })       
}
