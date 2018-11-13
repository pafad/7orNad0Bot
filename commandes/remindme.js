const config = require("../config.json")
module.exports.run = async (client, message, args) => {
    let Targs = args[0];
    let Hargs = args[1];
    let quoi = args.join(" ").slice(Targs.length + Hargs.length)
       if (Targs !== ""){
       if (Hargs !== "min" && Hargs !== "h" && Hargs !== ""){
          message.channel.send("il faut mettre **s** pour les secondes, **min** pour minute et **h** pour les heures.\nExemple : "+config.prefix+"remindme 1 min <texte>")
       }
         if(Hargs == "min"){
 
     let temps = Math.floor(60000 * Math.sqrt(Targs));
        setTimeout(Timer, temps);
    
     function Timer() {
        message.author.send(`Temps écoulé ! je devais de te rapeller : **${quoi}**`)
     }
    }
         if (Hargs == "h"){
     let hr = Math.floor(3600000 * Math.sqrt(Targs));
     setTimeout(Timer, hr);
     function Timer() {
        message.author.send(`Temps écoulé ! je devais de te rapeller : **${quoi}**`)
            }
        }
    }
}

module.exports.help = {
    name: "remindme",
    description:"rapelle une chose à faire",
    usage:"remindme/rmd 5 min <texte>",
    category:"utilitée"
}

module.exports.conf = {
    aliases:["rmd"]
  }
