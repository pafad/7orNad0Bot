const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message, args) => {
    const BingoUrl = process.env.bingourl;
     request(BingoUrl, (err, res, body) => {
         
         console.log('chargement !')
         
         if(err || res.statusCode!== 200)return
         
         console.log('chargé avec succés')
         var bingo = JSON.parse(body)
    let nombre = Math.floor(Math.random()*100);
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send("Tu n'as pas la permission de gérer les messages.")
        return;
    }else{
        if(bingo[message.guild.id]){
            message.channel.send("le bingo est déjà en cours.")
            return;
        }else{
        if(!bingo[message.guild.id]) bingo[message.guild.id] = {};
        request({ url: BingoUrl, method: 'PUT', json: bingo})
    message.author.send(`le nombre est : **${nombre}**`)
    message.channel.send("Le bingo est lancé devinez le nombre entre 0 et 100")
    var collect = message.channel.createCollector(m => m);
    collect.on("collect", m => {
            if(m.content === `${nombre}`){
                console.log("Reçu")
                clearTimeout(timer)
                delete bingo[message.guild.id]
                request({ url: BingoUrl, method: 'PUT', json: bingo})
                collect.stop();
                message.channel.send(`GG à ${m.author} qui a trouvé le nombre ${nombre}`)
            }
     },120000)
     var timer = setTimeout(() => {
        delete bingo[message.guild.id]
        request({ url: BingoUrl, method: 'PUT', json: bingo})
        message.channel.send("Zetes des noob à ne pas trouver le nombre au bout de 2 minutes, la réponse était : **"+nombre+"**")
     }, 120000);
        
    }
    }
})
}

module.exports.help = {
    name:"bingo",
    description:"tu dois deviner le chiffre donné par le bot",
    usage:"bingo <nombre>",
    category:"fun"
}

module.exports.conf = {
    aliases:[]
}
