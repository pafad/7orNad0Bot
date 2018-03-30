exports.run = (client, message, args) => {
    let num = parseInt(message.args[0]) || false;
    if (!message.args[0] || num === false){
        message.channel.send("<:7orNad0_negative_check_mark:400045843287375873> Pour bloquer le channel:\n" + "7lockdown <secondes>");
    }else{
    message.channel.send("<:7orNad0_check_mark:400045879958175745> Channel bloqué pendant: " + num + " secondes.**\nTu peux le débloquer en faisant `7unlock` dans le chat ou attendre que le lockdown soit fini.").then((m) => {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            let timer = setTimeout(function () {
                m.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: true
                }).then(() => {
                    m.channel.send("<:7orNad0_check_mark:400045879958175745> Channel débloqué !");
                });
            }, num * 1000);
            let collect = message.channel.createCollector(ms => ms.author.id === message.author.id, {
                time: num * 1000
            });
            collect.on('message', (msg) => {
                if (msg.content === "7unlock") {
                    m.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: true
                    }).then(() => {
                        clearTimeout(timer);
                        m.channel.send("<:7orNad0_check_mark:400045879958175745> Channel débloqué !");
                    });
                }
            })
        })
    });
}
}
