const math = require("mathjs");

module.exports.run = (client, message,args) => {
    if(!args || args.length < 1){
        message.channel.send("écris une opération valide.\nex: 2*41+99/2")
        return;
    }else{
        try{
            var nombre = math.eval(`${args.join(" ")}`)
            message.channel.send("```"+nombre+"```")
        }catch (e){
            message.channel.send("une erreur est survenue : **" + e.message + "** utilise la commande comme ceci\nex: 2*41+11/2");
        }
    }
}

module.exports.help = {
    name:"math",
    description:"Le bot fait des mathématiques",
    usage:"math 2*3+10",
    category:"utility"
}

module.exports.conf = {
    aliases:[]
}
