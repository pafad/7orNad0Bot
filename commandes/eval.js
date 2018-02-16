exports.run = (client, message, args) => {
        if(message.author.id !== '306119836503900161' && message.author.id !=='295908783081914378'){
            message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} Tu n'est pas mon developpeur.`)
            return;
        }else{
                try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send({embed:{color: 0x030303, description: ` \`\`\`${clean(evaled)}\`\`\``}});
    } catch (err) {
      message.channel.send({embed:{
        color: 0x030303,
         author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: 'érreur',
description: `\`\`\`xl\n${clean(err)}\n\`\`\``,
footer: {
icon_url: client.user.avatarURL,
text: client.user.username
},
}})
    }
  }
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
  }
}
