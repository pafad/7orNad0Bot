
    const Discord = require("discord.js")
    const client = new Discord.Client();
    client.on("message", message => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
    message.channel.send("tu n'as pas la permission de gérer les salons.")
       return;
    }else{
     message.channel.send("channel #vcs ajouté vous pouvez parler en faisant **3vcs [texte]** sans les [].");
     message.guild.createChannel("vcs").then(c => c.send({embed:{ 
        color: Math.floor(Math.random() * 16777214) + 1,
        fields:[{
        name: "règlement",
        value: "salut à vous utilisateurs du vcs voici un petit règlement à suivre."
        },
        {
            name:":gear: -> Règle 1:",
            value:"Ne spammez pas les vcs."
        },
        {
           name:":gear: -> Règle 2:",
           value:"Ne faite pas votre pub dans les vcs c'est pas fait pour ça."
        },
        {
            name:":gear: -> Règle 3:",
            value:"Insultez pas dans les vcs."
        },
        {
            name:":gear: -> Règle 4:",
            value:"Ne mettez pas de contenu pornographique ou gore dans la commande vcs-image."
        },
        {
            name:":gear: -> Règle 5:",
            value:"Toute formes de rascime y sont interdit."
        },
        {
          name:"Amusez-vous bien !",
          value: "Cordialement: @⚡Electrika⚡"
        }],
       timestamp: new Date(),
       footer:{
           text:"règlement by @⚡Electrika⚡"
        }    
        }
        }))
    }
})
