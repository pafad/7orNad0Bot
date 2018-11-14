module.exports.run = async (client, message, args) => {

    var timecount = parseInt(args[args.length-1], 10);
    if(!args.join(" ").endsWith(`${timecount}min`)){
      message.channel.send("Tu dois entrer **min** pour les minutes ou **h** pour les heures")
      return;
    }else{
        if(args.join(" ").endsWith(`${timecount}min`)){
        //plus petit que 10
        if(timecount < 10){
        setTimeout(() => {
            message.author.send(`Temps écoulé ! je devais te rapeller : **${args.join(" ").substring(0,  args.join(" ").length-4)}**`)
        }, timecount*60000);
        message.channel.send(`Oki, je vais te rapeller **${args.join(" ").substring(0,  args.join(" ").length-4)}** dans **${timecount} minutes**`)
        }
        //plus grand que 10
        if(timecount > 10){
            setTimeout(() => {
                message.author.send(`Temps écoulé ! je devais te rapeller : **${args.join(" ").substring(0,  args.join(" ").length-5)}**`)
            }, timecount*60000);
            message.channel.send(`Oki, je vais te rapeller **${args.join(" ").substring(0,  args.join(" ").length-5)}** dans **${timecount} minutes**`)
        }
    }else{
        if(args.join(" ").endsWith(`${timecount}h`)){
            //plus petit que 10
            if(timecount < 10){
            setTimeout(() => {
                message.author.send(`Temps écoulé ! je devais te rapeller : **${args.join(" ").substring(0,  args.join(" ").length-2)}**`)
            }, timecount*3600000);
            message.channel.send(`Oki, je vais te rapeller **${args.join(" ").substring(0,  args.join(" ").length-2)}** dans **${timecount} minutes**`)
            }
            //plus grand que 10
            if(timecount > 10){
                setTimeout(() => {
                    message.author.send(`Temps écoulé ! je devais te rapeller : **${args.join(" ").substring(0,  args.join(" ").length-3)}**`)
                }, timecount*3600000);
                message.channel.send(`Oki, je vais te rapeller **${args.join(" ").substring(0,  args.join(" ").length-3)}** dans **${timecount} minutes**`)
            }
        }
    }
}
}

module.exports.help = {
    name: "remindme",
    description:"rapelle une chose à faire",
    usage:"remindme/rmd <texte> 5min/5h",
    category:"utilité"
}

module.exports.conf = {
    aliases:["rmd"]
  }
