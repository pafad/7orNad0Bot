const config = require("../config.json")
module.exports.run = async (client, message, args) => {

         if(args){
             let quoi = "";
            for(var i in args){
                
                quoi =+ `${args[i.length-2].join(" ")}`;
                if(args[i.length-1] == !isNaN(args[i.length]) && args[i.length] < 0){

                    message.channel.send("il faut entrer **min** pour minutes et **h** pour les heures\nExemple : "+config.prefix+"rmd mp Onyx 10 min")

                    return;
                }else{
                    if(args[i.length] === "min"){
                        let min = Math.floor(60000 * Math.sqrt(args[i.length-1]));
                        setTimeout(Timer, min);
                    
                     function Timer() {

                        message.author.send(`Temps écoulé ! je devais de te rapeller : **${quoi}**`)

                     }
                     message.channel.send(`Oki ! je vais te rappeler ${quoi} dans ${args[i.length-1]}`)
                    }else{
                        if (args[i.length] === "h"){
                        let hr = Math.floor(3600000 * Math.sqrt(Targs));
                        setTimeout(Timer, hr);
                        function Timer() {

                           message.author.send(`Temps écoulé ! je devais de te rapeller : **${quoi}**`)
                               
                           }
                           message.channel.send(`Oki ! je vais te rappeler ${quoi} dans ${args[i.length-1]} heures`)
                    }
                    }
                    }
                }
            }else{
               
                message.channel.send("il faut entrer **min** pour minutes et **h** pour les heures\nExemple : "+config.prefix+"rmd mp Onyx 10 min")
 
            }
}

module.exports.help = {
    name: "remindme",
    description:"rapelle une chose à faire",
    usage:"remindme/rmd <texte> 5 min",
    category:"utilité"
}

module.exports.conf = {
    aliases:["rmd"]
  }
