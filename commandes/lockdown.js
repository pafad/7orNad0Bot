module.exports.run = async (client, message, args) => {
    const config = require("../config.json");
    let Targs = args[0];
    let Hargs = args[1];
    if (message.member.hasPermission("MANAGE_CHANNELS")){
       if (Targs !== ""){
       if (Hargs !== "s" && Hargs !== "min" && Hargs !== "h" && Hargs !== ""){
          message.channel.send("il faut mettre **s** pour les secondes, **min** pour minute et **h** pour les heures.\nExemple : "+config.prefix+"lockdown 1 min")
       }
           if(Hargs == "s"){
 
     let temps = Math.floor(1000 * Targs);
     var lock_s = setTimeout(Timer, temps);
     message.channel.overwritePermissions(message.guild.id,
       {
           'SEND_MESSAGES': false    
       }).catch(console.error)
           message.channel.send("Salon bloqué pour : **" + Targs + " secondes** fais "+config.prefix+"unlock pour le débloquer.");
           var collect = message.channel.createCollector(m => m);
           collect.on("collect", m => {
              if(message.member.hasPermission("MANAGE_CHANNELS")){
                  if(m.content === config.prefix+"unlock"){
                      console.log("Reçu")
                      clearTimeout(lock_s);
                      message.channel.overwritePermissions(message.guild.id,
                        {
                            'SEND_MESSAGES': null    
                        }).catch(console.error)
                        message.channel.send("Salon débloqué !")
                      collect.stop();
                  }
              }
           },Targs)
     function Timer() {
     message.channel.overwritePermissions(message.guild.id,
           {
               'SEND_MESSAGES': null    
           }).catch(console.error)
      message.channel.send("Salon débloqué !")
   console.log(`DONE ! `);
 }
}
         if(Hargs == "min"){
 
     let temps = Math.floor(60000 * Math.sqrt(Targs));
     var lock_min = setTimeout(Timer, temps);
     message.channel.overwritePermissions(message.guild.id,
       {
           'SEND_MESSAGES': false    
       }).catch(console.error)
           message.channel.send("Salon bloqué pour : **" + Targs + " minutes** fais "+config.prefix+"unlock pour le débloquer.");
           var collect = message.channel.createCollector(m => m);
           collect.on("collect", m => {
              if(message.member.hasPermission("MANAGE_CHANNELS")){
                  if(m.content === config.prefix+"unlock"){
                      console.log("Reçu")
                      clearTimeout(lock_min);
                      message.channel.overwritePermissions(message.guild.id,
                        {
                            'SEND_MESSAGES': null    
                        }).catch(console.error)
                        message.channel.send("Salon débloqué !")
                      collect.stop();
                  }
              } 
           },Targs)
     function Timer() {
     message.channel.overwritePermissions(message.guild.id,
           {
               'SEND_MESSAGES': null    
           }).catch(console.error)
      message.channel.send("Salon débloqué !")
   console.log(`DONE ! `);
 }
     }
         if (Hargs == "h"){
     let hr = Math.floor(3600000 * Math.sqrt(Targs));
    var lock_h = setTimeout(Timer, hr);
    message.channel.overwritePermissions(message.guild.id,
       {
           'SEND_MESSAGES': false    
       }).catch(console.error)
      message.channel.send("Salon bloqué pour: **"+ Targs + " heures** fais "+config.prefix+"unlock pour le débloquer.");
      var collect = message.channel.createCollector(m => m);
           collect.on("collect", m => {
              if(message.member.hasPermission("MANAGE_CHANNELS")){
                  if(m.content === config.prefix+"unlock"){
                      console.log("Reçu")
                      clearTimeout(lock_h);
                      message.channel.overwritePermissions(message.guild.id,
                        {
                            'SEND_MESSAGES': null    
                        }).catch(console.error)
                        message.channel.send("Salon débloqué !")
                      collect.stop();

                  }
              } 
           },Targs)
     function Timer() {
       message.channel.overwritePermissions(message.guild.id,
           {
               'SEND_MESSAGES': null    
           }).catch(console.error)
           message.channel.send("Salon débloqué !")
   console.log(`DONE ! `);
                }
            }
        }
    }
}

module.exports.help = {
    name: "lockdown",
    description:"enlève la permission d'envoyer des message dans le channel",
    usage:"lockdown/lock 5 min",
    category:"modération"
}

module.exports.conf = {
    aliases:["lock"]
  }
