module.exports.run = async (client, message, args) => {
         let Targs = args[0];
         let Hargs = args[1];
         if (message.member.hasPermission("MANAGE_CHANNELS")){
      
            if (Targs !== ""){
            if (Hargs !== "min" && Hargs !== "h" && Hargs !== ""){
               message.channel.send("il faut mettre **min** pour minute et **h** pour heure\nex: 3lock 1 h")
            }
      
              if(Hargs == "min"){
      
          let temps = Math.floor(60000 * Math.sqrt(Targs));
         setTimeout(Timer, temps);
          message.channel.overwritePermissions(message.guild.id,
            {
                'SEND_MESSAGES': false    
            }).catch(console.error)
                message.channel.send("salon bloqué pour :**" + Targs + "minutes**.");
          function Timer() {
          message.channel.overwritePermissions(message.guild.id,
                {
                    'SEND_MESSAGES': null    
                }).catch(console.error)
        console.log(`DONE ! `);
      }
          }
              if (Hargs == "h"){
          let hr = Math.floor(600000 * Math.sqrt(Targs));
         setTimeout(Timer, hr);
         message.channel.overwritePermissions(message.guild.id,
            {
                'SEND_MESSAGES': false    
            }).catch(console.error)
           message.channel.send("salon bloqué pour: **"+ Targs + " heures**.");
          function Timer() {
            message.channel.overwritePermissions(message.guild.id,
                {
                    'SEND_MESSAGES': null    
                }).catch(console.error)
        console.log(`DONE ! `);
                }
            }
        }
    }
}

module.exports.help = {
    name: "lock"
  }
